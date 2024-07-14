const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModal = mongoose.model("Category", categorySchema);
module.exports = CategoryModal;
