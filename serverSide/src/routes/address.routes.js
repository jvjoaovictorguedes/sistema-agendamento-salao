const express = require('express');
const router = express.Router();
const AddressControl = require('../controllers/addressController')
const AddressMiddleware = require('../middlewares/addressMiddleware')

router.post('/', AddressMiddleware.validatedPeople, AddressControl.InsertAddress)

router.get('/:id_people', AddressMiddleware.validatedPeople, AddressControl.PullAddress);

module.exports = router