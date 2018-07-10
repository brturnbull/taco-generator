const Taco = require('../models/taco');

function indexRoute(req, res, next) {
  Taco
    .find()
    .exec()
    .then(tacos => res.json(tacos))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
