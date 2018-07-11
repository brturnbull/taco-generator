const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Taco = require('../models/taco');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Taco.create([{
    condiment: 'Salsa',
    mixin: 'Jalapeños',
    seasoning: 'Aioli',
    base_layer: 'Pulled Pork',
    shell: 'Soft Corn Tortilla'
  },{
    condiment: 'Greek Yoghurt',
    mixin: 'Charred Corn',
    seasoning: 'Paprika Salt',
    base_layer: 'Chipotle Chicken',
    shell: 'Soft Flour Tortilla'
  },{
    condiment: 'Guacamole',
    mixin: 'Corn Salsa',
    seasoning: 'Turmeric Salt',
    base_layer: 'Black Bean Chilli',
    shell: 'Lettuce Leaf'
  },{
    condiment: 'A Cold Pacifico',
    mixin: 'Mango Salsa',
    seasoning: 'Jalapeno Aioli',
    base_layer: 'Shrimp',
    shell: 'Soft Flour Tortilla'
  }])
    .then(tacos => console.log(`${tacos.length} tasty tacos created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
