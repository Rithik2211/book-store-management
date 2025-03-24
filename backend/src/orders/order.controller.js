const Order = require('./order.model');

const createAOrder = async(req, res) => {
    try{
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(error){
        console.error("Error in Creating a Order", error);
        res.status(500).send({message : "Failed to make a Order!"});
    }
}

const getOrderByEmail = async(req, res) => {
    try{
        const {email} = req.params
        const getOrder = await Order.find({email}).sort({createdAt : -1})
        if (!getOrder) {
            res.status(404).send({message : "Order for this Email Not Found"});
        }
        res.status(200).send(getOrder)
    }
    catch(error){
        console.error("Error in Getting a Order", error);
        res.status(500).send({message : "Failed to get a Order!"});
    }
}

module.exports = { createAOrder, getOrderByEmail };