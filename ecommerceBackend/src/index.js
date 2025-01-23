const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "https://blissbuy.vercel.app"],
  credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "welcome to eco api", status: true });
});

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route.js");
app.use("/api/user", userRouters);

const productRouters = require("./routes/product.routes.js");
app.use("/api/products", productRouters);

const adminProductRouters = require("./routes/adminProduct.routes.js");
app.use("/api/admin/product", adminProductRouters);

const adminOrderRouters = require("./routes/adminOrder.routes.js")
app.use("/api/admin/order",adminOrderRouters);

const cartRouters = require("./routes/cart.route.js");
app.use("/api/cart", cartRouters);

const cartItemRouters = require("./routes/cartItem.route.js");
app.use("/api/cart_items", cartItemRouters);

const orderRouters = require("./routes/order.route.js");
app.use("/api/order", orderRouters);

const paymentRouters = require("./routes/payment.routes.js");
app.use("/api/payments", paymentRouters);

module.exports = app;
