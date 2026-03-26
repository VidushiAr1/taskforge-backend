const router = require("express").Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../../controllers/task.controller");
const { authenticate } = require("../../middleware/auth.middleware");
const { body } = require("express-validator");

router.use(authenticate);

router.get("/", getTasks);
router.post(
  "/",
  [body("title").notEmpty().trim().withMessage("Title is required")],
  createTask,
);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
