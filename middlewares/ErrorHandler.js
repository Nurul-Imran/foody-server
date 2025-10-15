const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.status || 500).send({
        success: false,
        status: err.status || 500,
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;