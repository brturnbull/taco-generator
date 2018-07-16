const router = require('express').Router();
const tacos = require('../controllers/tacos');

router.route('/tacos')
  .get(tacos.index)
  .post(tacos.create);

router.route('/tacos/:id')
  .get(tacos.show);

module.exports = router;
