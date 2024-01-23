const express = require("express");
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../services/aws')

router.post('/', multer(multerConfig).single('file'), async (req, res) => {
    console.log(req.file);

    return res.json({ hello: 'John' });
})

module.exports = router;