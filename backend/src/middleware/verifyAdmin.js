const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token){
        return res.send(401).json({
            message : "Access Denied!. No token provided!"
        })
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err){
            return res.send(403).json({
                message : "Invalid Credentials!"
            })
        }
        req.user = user;
        next();
    })

}

module.exports = verifyAdminToken;