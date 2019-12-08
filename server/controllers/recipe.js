const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    models.Recipe.find({})
      .sort({dateCreated: -1})
      .then((recipes) => res.send(recipes))
      .catch(next);
  },

  post: (req, res, next) => {
    const { description } = req.body;
    const { _id } = req.user;

    models.Recipe.create({ description, author: _id })
      .then((createdRecipe) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { recipes: createdRecipe } }),
          models.Recipe.findOne({ _id: createdRecipe._id })
        ]);
      })
      .then(([modifiedObj, recipeObj]) => {
        res.send(recipeObj);
      })
      .catch(next);
  }
};
