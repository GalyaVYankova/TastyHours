const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.picture.get);

router.post('/', auth(), controllers.picture.post);

module.exports = router;