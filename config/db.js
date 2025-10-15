const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected');
    } catch (error) {
        console.error(error);
        console.error("Database connection failed");
        process.exit();
    }
}

module.exports = connectDB;