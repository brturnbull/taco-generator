const Taco = require('../models/taco');

function indexRoute(req, res, next) {
  Taco
    .find()
    .exec()
    .then(tacos => res.json(tacos))
    .catch(next);
}

function createRoute(req,res,next) {
  Taco
    .create(req.body)
    .then(taco => res.status(201).json(taco))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute
};
