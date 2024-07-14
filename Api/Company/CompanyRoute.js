const {
  getAllCompanies,
  createCompany,
  updateCompany,
} = require("./CompanyController");

const router = require("express").Router();

router.get("/", getAllCompanies);
router.post("/", createCompany);
router.put("/:id", updateCompany);

module.exports = router;
