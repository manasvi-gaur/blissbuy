const Razorpay = require('razorpay');
const RAZORPAY_KEY_ID = "rzp_test_AymppAMbU2159y";
const RAZORPAY_KEY_SECRET = "27EIdxAXmpzVFE0gWqQ8rfd5";

const razorpayClient = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

module.exports = razorpayClient;