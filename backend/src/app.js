const express = require("express");
const app = express();

const cors = require("cors");
const icecreamroute = require("./routes/icecream");
const userroute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

require("./db/conn");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://devnarayan.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    candentials: true,
  })
);

app.use(cors());

app.use("/", userroute);
app.use("/icecream/", icecreamroute);
app.use("/cart/", cartRoute);
app.use("/order/", orderRoute);
// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log("Backend is running on port", port));
app.listen(3001, () => {
  console.log("Server is Running");
});
