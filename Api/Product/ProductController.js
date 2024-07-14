const ProductModal = require("./ProductModal");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const query = req.query;
      console.log(query);
      const products = await ProductModal.find().populate(query.populate);
      res
        .status(200)
        .send({ status: "ok", message: "All records fetched", products });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        console.log("No files were uploaded.");
      }

      let productImage = req?.files?.productImage;
      uploadPath = __dirname + "../../../public/" + productImage.name;
      productImage.mv(uploadPath, async function (err) {
        if (err) return res.status(500).send(err);

        const product = new ProductModal({
          ...req.body,
          productImage: `http://localhost:5000/${productImage.name}`,
        });

        await product.save();
        res
          .status(201)
          .send({ status: "ok", message: "product created", product });
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  updateProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await ProductModal.findByIdAndUpdate(id, req.body);
      res
        .status(201)
        .send({ status: "ok", message: "record updated", product });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
