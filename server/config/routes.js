const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/origami', router.origami);

    app.use('/api/picture', router.picture);

    app.use('/api/recipe', router.recipe);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};