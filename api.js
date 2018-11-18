const express = require("express");
const mongoose = require("mongoose");
const app = express();
const chalk = require("chalk");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-9dxpj.mongodb.net/test?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log(chalk.blue("App started..."));
});
