const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const locationRouter = require("./routes/locationRoutes");
const menuRouter = require("./routes/menuRoutes");
const tableRouter = require("./routes/tableRoutes");
const userRouter = require("./routes/authRoutes");
const orderRouter = require("./routes/orderRoutes");
const profileRouter = require("./routes/profileRoutes");
const cors = require("cors");
const cookieparser = require("cookie-parser");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());

mongoose
  .connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error in connecting to database", err);
  });

app.use("/location", locationRouter);
app.use("/menu", menuRouter);
app.use("/table", tableRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/profile", profileRouter);

app.listen(process.env.PORT || 4500, () => {
  console.log("Running successfully");
});
