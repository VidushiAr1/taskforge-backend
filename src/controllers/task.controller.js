const pool = require("../config/db");
const { validationResult } = require("express-validator");

const getTasks = async (req, res) => {
  try {
    const isAdmin = req.user.role === "admin";
    const query = isAdmin
      ? "SELECT tasks.*, users.name as owner FROM tasks JOIN users ON tasks.user_id=users.id ORDER BY tasks.created_at DESC"
      : "SELECT * FROM tasks WHERE user_id=$1 ORDER BY created_at DESC";
    const result = await pool.query(query, isAdmin ? [] : [req.user.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      `INSERT INTO tasks (user_id, title, description) VALUES ($1,$2,$3) RETURNING *`,
      [req.user.id, title, description],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
    if (!task.rows.length)
      return res.status(404).json({ error: "Task not found" });
    if (task.rows[0].user_id !== req.user.id && req.user.role !== "admin")
      return res.status(403).json({ error: "Forbidden" });

    const result = await pool.query(
      `UPDATE tasks SET title=COALESCE($1,title), description=COALESCE($2,description),
       status=COALESCE($3,status), updated_at=NOW() WHERE id=$4 RETURNING *`,
      [title, description, status, id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
    if (!task.rows.length)
      return res.status(404).json({ error: "Task not found" });
    if (task.rows[0].user_id !== req.user.id && req.user.role !== "admin")
      return res.status(403).json({ error: "Forbidden" });

    await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
