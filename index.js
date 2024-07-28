const express = require("express");
const fileUpload = require("express-fileupload");

const cors = require("cors");

const app = express();
const connectDB = require("./config.js");

// const Usermodel = require("./usermodel.js");

const categoryRoutes = require("./Api/Category/CategoryRoutes.js");
const companyRoutes = require("./Api/Company/CompanyRoute.js");
const productRoutes = require("./Api/Product/ProductRoute.js");
const orderRoutes = require("./Api/Order/OrderRoute.js");
connectDB();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'))

app.use("/catogories", categoryRoutes);
app.use("/companies", companyRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
// app.post("/users", async (req, res) => {
//   const user = new Usermodel(req.body);
//   try {
//     await user.save();
//     res.status(201).send({ status: "ok", message: "user created", user });
//     console.log(req.body);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// app.put("/users/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await Usermodel.findByIdAndUpdate(id, req.body, { new: true });
//     if (!user) {
//       res.status(404).send({ message: "User not found" });
//     } else {
//       res.status(200).send({ status: "ok", message: "user updated", user });
//     }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Usermodel.findByIdAndDelete(id);
//     if (!user) {
//       res.status(404).send({ message: "User not found" });
//     } else {
//       res.status(200).send({ status: "ok", message: "User deleted" });
//     }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await Usermodel.find({});

//     res.status(200).send({ status: "ok", message: "All Users Found", users });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Usermodel.findById(id);
//     res.status(200).send({ status: "ok", message: "User Found", user });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

function listen() {
  console.log("Application is running");
}

app.listen(5000, listen);
