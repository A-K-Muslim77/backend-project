const express = require('express');
const router = express.Router();
const { handleGetRequest, handlePostRequest } = require('../controllers/requestController');

router.get('/', handleGetRequest);
router.post('/', handlePostRequest);

module.exports = router;