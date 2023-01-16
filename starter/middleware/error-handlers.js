
//errorHandler func
const errorHandlerMiddleware = async(err, req, resp, next) => {
    console.log(err)
    return resp.status(500).json({msg: "something went wrong, please try again"})
}

module.exports = errorHandlerMiddleware;