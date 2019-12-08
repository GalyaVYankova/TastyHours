const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.recipe.get);
router.post('/', auth(), controllers.origami.post);

module.exports = router;
