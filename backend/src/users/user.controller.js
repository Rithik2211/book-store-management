const jwt = require('jsonwebtoken');
const User = require('./user.model');

const getAdmin = async(req, res) => {
    const {username, password} = req.body;
    try{
        const JWT_SECRET = process.env.JWT_SECRET;
        const getAdmin = await User.findOne({username});
        if (!getAdmin) {
            res.status(404).send({message : "Admin Not Found!"});
        }
        if(getAdmin.password !== password){
            res.status(404).send({message : "Invalid Password!"});
        }

        const token = jwt.sign(
            { id : getAdmin._id, username: getAdmin.username, role: getAdmin.role }, 
            JWT_SECRET, 
            {expiresIn: "1h"}
        );
        res.status(200).json({
            message : "Authentication Successfull",
            token : token,
            user : {
                username: getAdmin.username, 
                role: getAdmin.role
            }
        })
    }
    catch(error){
        console.error("Error in Getting a Admin Details", error);
        res.status(500).send({message : "Failed to get Admin Details!"});
    }
}

module.exports = { getAdmin };