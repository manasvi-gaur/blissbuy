const orderService = require('./orderService.js');
const razorPayClient = require('../config/razorpayClient.js');

const createPaymentLink = async(orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
        console.log(order);
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
            paymentLinkUrl
        }
        return resData;
    } catch (error) {
        throw new Error(error.message);
    }
}

const updatePaymentInformation=  async(reqData)=>{
    const paymentId = reqData.payment_id;
    const orderId = reqData.order_id;
    try {
        const order = await orderService.findOrderById(orderId);
        const payment = await razorPayClient.payments.fetch(paymentId);
        if(payment.status === 'captured'){
            order.paymentDetails.paymentId = paymentId;
            order.paymentDetails.status = 'COMPLETED';
            order.orderStatus = 'PLACED';
            await order.save();
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