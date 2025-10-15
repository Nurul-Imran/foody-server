const express = require('express');
const router = express.Router();

const Order = require('../models/orderModel');

router.post('/order', async(req, res, next) => {
    try {
        const {email, order_info, order_date} = req.body;
        const updatedOrder = await Order.findOneAndUpdate({email}, {$push: {order_info: {order: order_info, order_date} }});
        if (!updatedOrder) {
            const order = await Order.create({email, order_info: [{order: order_info, order_date}]});
            return res.status(200).json({
                success: true,
                message: "New Order Added",
                data: order
            })
        }
        return res.status(200).json({
            success: true,
            message: "New Order Added",
            data: updatedOrder
        })
    } catch (error) {
        next(error);
    }
});


router.post('/get-order', async(req, res, next) => {
    try {
        const { email } =  req.body;
        const order  = await Order.findOne({email});
        if (!order) {
            res.status(400).json({
                success: false,
                message: "You have no order"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Get Order",
            order
        })
    } catch (error) {
        next(error);
    }
})


module.exports = router;