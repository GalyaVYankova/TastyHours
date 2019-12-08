const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    models.Picture.find({}).populate('author')
      .sort({dateCreated: -1})
      .then((pictures) => res.send(pictures))
      .catch(next);
  },

  post: (req, res, next) => {
    const { url } = req.body;
    const { _id } = req.user;

    models.Picture.create({ url, author: _id })
      .then((createdPicture) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { pictures: createdPicture } }),
          models.Picture.findOne({ _id: createdPicture._id })
        ]);
      })
      .then(([modifiedObj, pictureObj]) => {
        res.send(pictureObj);
      })
      .catch(next);
  }
};
