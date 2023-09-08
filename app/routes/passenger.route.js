const express = require('express');
const { getPassengers } = require('../controllers/passenger.controller');


const router = express.Router();


router.get('/', getPassengers);



module.exports = router;
