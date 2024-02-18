module.exports.newRequests = function(req,res,next){
    console.log(`${req.method}: ${req.originalUrl} ,  Access Token:${req.header('Authorization')}`);
    next();
}