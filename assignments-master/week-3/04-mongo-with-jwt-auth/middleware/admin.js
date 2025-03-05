const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // with this you get token like this bearer aabdbasbdsbadbsd
    const words = token.split(" ")
    // this will convert the token in the form of array like this [bearer,(adsfdssfsfsf)]
    const jwtToken = words[1]
    // with this you can access the real token string which is on index one

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
    if(decodedValue.username){
        next()
    }
    else{
        res.status(403).json({
            msg:"You are not authenticated!!"
        })
    }

}

module.exports = adminMiddleware;