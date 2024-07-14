const CategoryModal = require("./CategoryModal");

module.exports = {
  getAllCategoies: async (req, res) => {
    try {
      const categories = await CategoryModal.find();
      res
        .status(200)
        .send({ status: "ok", message: "All records fetched", categories });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  createCategory: async (req, res) => {
    const category = new CategoryModal(req.body);
    try {
      await category.save();
      res
        .status(201)
        .send({ status: "ok", message: "category created", category });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  updateCategory: async (req, res) => {
    const id = req.params.id;
    try {
      const category = await CategoryModal.findByIdAndUpdate(id, req.body);
      res
        .status(201)
        .send({ status: "ok", message: "record updated", category });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
