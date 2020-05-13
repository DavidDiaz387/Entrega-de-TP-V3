var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')
var multer = require('multer')

/* GET users listing. */
  /**Aca se pondra el E-mail y Pass para corroborar el login */
router.get('/', usersController.login);
  /**Aca va el formulario para registrarse */
router.get('/login',usersController.register);
  /**Aca se recibira la info para registrarse */
router.post('/login',usersController.registerDate);



module.exports = router;
