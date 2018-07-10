const router = require('express').Router();
const tacos = require('../controllers/tacos');

router.route('/tacos')
  .get(tacos.index);


module.exports = router;
