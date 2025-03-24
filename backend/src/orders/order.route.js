const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');
const router = express.Router();

//create order end points
router.post('/create-order', createAOrder);
//get order end points
router.post('/get-order/:email', getOrderByEmail);

module.exports = router;