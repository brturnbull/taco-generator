const mongoose = require('mongoose');

const tacoSchema = new mongoose.Schema({
  recipe: { type: String },
  base_layer: {
    slug: { type: String },
    recipe: { type: String },
    name: { type: String },
    url: { type: String }
  },
  shell_url: { type: String },
  name: { type: String },
  shell: {
    slug: { type: String },
    recipe: { type: String },
    name: { type: String },
    url: { type: String }
  },
  mixin_url: { type: String },
  base_layer_url: { type: String },
  mixin: {
    slug: { type: String },
    recipe: { type: String },
    name: { type: String },
    url: { type: String }
  },
  condiment: {
    slug: { type: String },
    recipe: { type: String },
    name: { type: String },
    url: { type: String }
  },
  slug: { type: String },
  url: { type: String },
  condiment_url: { type: String },
  seasoning_url: { type: String }
}

//   {
//   condiment: { type: String },
//   mixin: { type: String },
//   seasoning: { type: String },
//   base_layer: { type: String },
//   shell: { type: String }
// }

);

module.exports = mongoose.model('Taco', tacoSchema);
