const express = require("express");
const router = express.Router();

const OrderController = require("../controller/order.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.post("/", authenticate, OrderController.createOrder);
router.get("/user", authenticate, OrderController.orderHistory);
router.get("/:id", authenticate, OrderController.findOrderById);

module.exports = router;
