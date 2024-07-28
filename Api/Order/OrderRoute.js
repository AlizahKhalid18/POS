const {
    getAllOrders,
    createOrder,
  } = require("./OrderController");
  
  const router = require("express").Router();
  
  router.get("/", getAllOrders);
  router.post("/", createOrder);
  
  module.exports = router;
  