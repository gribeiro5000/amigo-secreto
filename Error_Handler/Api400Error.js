const BaseError = require("./BaseError.js");
const httpStatusCode = require("./httpStatusCode");

class Api400Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.BAD_REQUEST,
    isOperational = true,
    description = "bad request",
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Api400Error;
