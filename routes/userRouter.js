const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
});

module.exports = userRouter;
