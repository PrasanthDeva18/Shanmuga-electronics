class ErrorHandler extends Error{
    constructor(message,statuscode) {
        super(message)
        this.statuscode = statuscode;
        //stores the error related content
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = ErrorHandler