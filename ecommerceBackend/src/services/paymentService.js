const orderService = require('./orderService.js');
const razorPayClient = require('../config/razorpayClient.js');
const cartService = require("../services/cart.service.js")

const createPaymentLink = async(orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
        const paymentLinkRequest = {
            amount: order.totalPrice * 100,
            currency: 'INR',
            customer: {
                name: order.user.firstName + ' ' + order.user.lastName,
                email: order.user.email,
                contact: order.user.mobileNo
            },
            notify: {
                sms: true,
                email: true
            },
            reminder_enable: true,
            callback_url: 'http://localhost:3000/checkout',
            callback_method: 'get',
        }

        const paymentLink = await razorPayClient.paymentLink.create(paymentLinkRequest);
        const paymentLinkId = paymentLink.id;
        const paymentLinkUrl = paymentLink.short_url;
        const resData = {
            paymentLinkId,
            paymentLinkUrl,
            orderId
        }
        return resData;
    } catch (error) {
        throw new Error(error.message);
    }
}

const updatePaymentInformation=  async({ payment_id,paymentLinkId })=>{
    const paymentId = payment_id;
    // const orderId = order_id;
    console.log(paymentId);;
    // console.log(orderId);
    try {
        // const order = await orderService.findOrderById(orderId);
        console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
        console.log("done till here")
        const payment = await razorPayClient.payments.fetch(paymentId);
        const paymentLink = await razorpayClient.paymentLink.fetch(paymentLinkId);
        if(payment.status === 'captured'){
            // order.paymentDetails.paymentId = paymentId;
            // order.paymentDetails.status = 'COMPLETED';
            // order.orderStatus = 'PLACED';
            // await order.save();
            console.log("**********************************************************888")
            // console.log(order.user);
            // await cartService.clearCart(order.user);
        }
        const resData = {message: 'Your order placed successfully',success: true};
        return resData;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createPaymentLink,
    updatePaymentInformation
}