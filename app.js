const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./utils/config");
const userRouter = require("./routes/userRouter");

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

//app.use(errorHandler);  <--- define it

module.exports = app;
