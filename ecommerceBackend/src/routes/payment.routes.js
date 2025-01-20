const express = require('express');
const authenicate = require('../middleware/authenticate.js');
const router = express.Router();

const paymentController = require('../controller/payment.controller.js');
const authenticate = require('../middleware/authenticate.js');


router.post("/:id",authenicate,paymentController.createPaymentLink);
router.get("/",authenticate,paymentController.updatePaymentInformation);

module.exports = router;