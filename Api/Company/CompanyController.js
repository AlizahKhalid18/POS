const CompanyModal = require("./CompanyModal");

module.exports = {
  getAllCompanies: async (req, res) => {
    try {
      const query = req.query;
      console.log(query);
      const companies = await CompanyModal.find().populate(query.populate);
      res
        .status(200)
        .send({ status: "ok", message: "All records fetched", companies });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  createCompany: async (req, res) => {
    const company = new CompanyModal(req.body);
    try {
      await company.save();
      res
        .status(201)
        .send({ status: "ok", message: "company created", company });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  updateCompany: async (req, res) => {
    const id = req.params.id;
    try {
      const company = await CompanyModal.findByIdAndUpdate(id, req.body);
      res
        .status(201)
        .send({ status: "ok", message: "record updated", company });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
