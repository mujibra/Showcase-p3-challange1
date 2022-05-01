const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const userRoute = require("./routes/users");
const foodRoute = require("./routes/products");
const UserController = require("./controllers/userController");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CREATE USER
app.post("/register", UserController.create);

// LOGIN USER
app.post("/login", UserController.login);

app.use("/users", userRoute);
app.use("/products", foodRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listen on Port ${port}`);
});
