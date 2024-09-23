const CustomAPIError = require("./custom-error");
const {StatusCodes, ReasonPhrases} = require("http-status-codes");
class UnauthenticatedError extends CustomAPIError {
    constructor(message = ReasonPhrases.UNAUTHORIZED) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError;
