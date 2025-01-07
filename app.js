const express = require("express");
const coursesRouter = require("./routes/courses");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter);

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("DB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log("Server is running..");
});
