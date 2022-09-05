const jwt = require('jsonwebtoken');


const isAuth = (req, res, next) => {

    const token = req.header('Authorization')?.replace("Bearer ", "") || req.cookies.token || req.body.token;  // || parts are applicable if and only if you are allowing this kind of token transaction

    if(!token){
        return res.status(403).send("You are not authorised to access this information");
    }

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode;

    } catch (error) {
        res.status(401).send("Invalid token")
        console.log("Auth error",error)
    }
    return next()
}

module.exports = isAuth