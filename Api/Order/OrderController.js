const OrderModal = require("./OrderModel.js");
const ProductModal = require("../Product/ProductModal.js");

module.exports = {
  getAllOrders: async (req, res) => {
    try {
      const query = req.query;
      const orders = await OrderModal.find().populate("items.product");
      res
        .status(200)
        .send({ status: "ok", message: "All records fetched", orders });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  createOrder: async (req, res) => {
    const order = new OrderModal(req.body);
    try {
      let { items } = req.body;
      for (const item of items) {
        const product = await ProductModal.findById(item.product);
        await ProductModal.findByIdAndUpdate(item.product, {
          stock: product.stock - item.quantity,
        });
      }
      await order.save();
      res
        .status(201)
        .send({ status: "ok", message: "Order Placed Successfully", order });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
