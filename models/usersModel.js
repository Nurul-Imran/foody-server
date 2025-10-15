const mongooose = require('mongoose');

const usersSchema = new mongooose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongooose.model('users', usersSchema);

module.exports = User;