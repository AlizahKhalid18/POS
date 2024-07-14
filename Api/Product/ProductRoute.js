const {
    getAllProducts,
    createProduct,
    updateProduct,
  } = require("./ProductController");
  
  const router = require("express").Router();
  
  router.get("/", getAllProducts);
  router.post("/", createProduct);
  router.put("/:id", updateProduct);
  
  module.exports = router;
  