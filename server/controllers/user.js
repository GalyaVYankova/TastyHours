const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const appConfig = require('../app-config');

module.exports = {
  get: (req, res, next) => {
    models.User.find()
      .then((users) => res.send(users))
      .catch(next)
  },

  post: {
    register: (req, res, next) => {
      const { username, password } = req.body;
      models.User.create({ username, password })
        .then((createdUser) => res.send(createdUser))
        .catch(next)
    },

    login: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
        .then((user) => Promise.all([user, user.matchPassword(password)]))
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('No such user or password.');
            return;
          }
          const token = utils.jwt.createToken({ id: user._id });
          res.cookie(config.authCookieName, token);
          res.redirect("/");
        })
        .catch(() => {
          res.status(401).send('No such user or password.');
          return;
        });
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log('-'.repeat(100));
      console.log(token);
      console.log('-'.repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send('Logout successfully!');
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
      .then((updatedUser) => res.send(updatedUser))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then((removedUser) => res.send(removedUser))
      .catch(next)
  }
};