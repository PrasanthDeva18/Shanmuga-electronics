
module.exports = (err,req,res,next) =>{
    err.statuscode = err.statuscode || 500;
    if(process.env.node_env === "development"){
        res.status(err.statuscode).json({
            success:false,
            message: err.message,
            stack:err.stack,
            error:err
        })
    }
    if(process.env.node_env == "production"){
        let msg = err.message;
        // let error = {...err}
        let error = new Error(msg);
        if(err.name === "ValidationError"){
            msg = Object.values(err.errors).map(val => val.message);
            error = new Error(msg);
            err.statusCode = 400

        }
        if(err.name == 'CastError'){
            message = `Resource not found: ${err.path}` ;
            error = new Error(message)
            err.statusCode = 400
        }
        res.status(err.statuscode).json({
            success:false,
            message: error.message || 'Internal Server Error'
        //    message
        
        })
    }
}