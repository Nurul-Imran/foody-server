const express = require('express');
const cors = require('cors');

const app = express();

// Local Module
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/ErrorHandler');
const userRoutes = require('./routes/userRoutes');
const displayRoutes = require('./routes/displayRoutes');
const orderRoutes = require('./routes/orderRoutes');

// passport
const passport = require('./config/passport');
app.use(passport.initialize());

// MiddleWare for Parse Data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Cors
app.use(cors());

// Routes
app.use('/api', userRoutes);
app.use('/api', displayRoutes);
app.use('/api', orderRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// 404 & Global Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;