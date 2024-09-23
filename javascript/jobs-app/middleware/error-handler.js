const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    }

    // mongoose - duplicate error
    if (err.code && err.code === 11000) {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = `Duplicate value for ${Object.keys(err.keyValue)} field, please choose another value`;
    }

    // mongoose - validation error
    if (err.name === "ValidationError") {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = Object.values(err.errors).map( (item) => {
            return item.message
        }).join(", ");
    }

    // mongoose - cast error, e.g. malformed _id value
    if (err.name === "CastError") {
        customError.statusCode = StatusCodes.NOT_FOUND,
        customError.msg = `No item found with id ${err.value}`
    }

    return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware
