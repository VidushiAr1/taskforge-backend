const router = require("express").Router();
const {
  authenticate,
  authorizeAdmin,
} = require("../../middleware/auth.middleware");
const pool = require("../../config/db");

router.get("/", authenticate, authorizeAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC",
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
