const express = require('express');

const { createApiMaker, readApiMaker, updateApiMaker, displayApiMaker } = require('../controllers/apimaker.controller');

const router = express.Router();

router.get('/apimaker', displayApiMaker);
router.post('/apimaker', createApiMaker);
router.get('/apimaker/:id', readApiMaker);
router.put('/apimaker/:id', updateApiMaker);

module.exports = router;