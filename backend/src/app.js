const express = require("express");
const cors = require("cors");
const icecreamroute = require("./routes/icecream");
const userroute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

// Import dotenv and configure it for production
require("dotenv").config({ path: "./.env.local" });

// Replace the following line with your database connection logic
require("./db/conn");

const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://devnarayan.vercel.app",
  // methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Define routes
app.use("/", userroute);
app.use("/icecream/", icecreamroute);
app.use("/cart/", cartRoute);
app.use("/order/", orderRoute);

// Define a default route or handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => console.log("Backend is running on port", port));
