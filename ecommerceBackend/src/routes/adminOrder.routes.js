const express = require("express");
const router = express.Router();

const adminOrderController = require("../controller/adminOrder.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, adminOrderController.getAllOrders);
router.put(
  "/:orderId/confirmed",
  authenticate,
  adminOrderController.confirmedOrders
);
router.put("/:orderId/ship", authenticate, adminOrderController.shippOrders);
router.put(
  "/:orderId/deliver",
  authenticate,
  adminOrderController.deliverOrders
);
router.put(
  "/:orderId/cancel",
  authenticate,
  adminOrderController.cancelledOrders
);
router.put("/:orderId/delete", authenticate, adminOrderController.deleteOrders);

module.exports = router;
