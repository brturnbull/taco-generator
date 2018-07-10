const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Taco = require('../models/taco');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase
})
