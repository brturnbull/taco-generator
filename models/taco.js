const mongoose = require('mongoose');

const tacoSchema = new mongoose.Schema({
  condiment: { type: String },
  mixin: { type: String },
  seasoning: { type: String },
  base_layer: { type: String },
  shell: { type: String }
});

module.exports = mongoose.model('Taco', tacoSchema);
