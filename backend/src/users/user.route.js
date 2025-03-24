const express = require('express');
const { getAdmin } = require('./user.controller');
const router = express.Router();

//get admin user end points
router.post('/admin', getAdmin);

module.exports = router;