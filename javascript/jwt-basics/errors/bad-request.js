const CustomAPIError = require("./custom-error");
const {StatusCodes, ReasonPhrases} = require("http-status-codes");
class BadRequestError extends CustomAPIError {
    constructor(message = ReasonPhrases.BAD_REQUEST) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;
