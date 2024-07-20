const {
  getAllProducts,
  createProduct,
  updateProduct,
  searchProduct,
} = require("./ProductController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.post("/search", searchProduct);

module.exports = router;
