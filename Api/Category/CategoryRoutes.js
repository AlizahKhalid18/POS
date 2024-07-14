const { getAllCategoies, createCategory, updateCategory } = require("./CategoryController");

const router = require("express").Router();

router.get("/", getAllCategoies);
router.post("/", createCategory);
router.put("/:id", updateCategory);

module.exports = router;
