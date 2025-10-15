const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    order_info: {
        type: Array,
        required: true,
    }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;