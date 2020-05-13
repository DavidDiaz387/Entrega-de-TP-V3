var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')
var methodOverride = require('method-override')



/* GET home page. */
router.get('/', controller.home);
/* GET de products para mostrar por id y categoria*/
router.get('/product/detail/:id', controller.productsDetalle);
/* *GET muestra todos los productos de la B.D */
router.get('/products', controller.product)
/*.*GET muestra la pagina done se modificar un produto*/
router.get('/products/edit/:id', controller.productEdit)
/*.*PUT sera para modificar un producto*/ 
router.put('/products/edit/:id', controller.edit)
/*.*DELETE sera la ruta para borrar un producto */
router.delete('/products/delete/id', controller.borrar)
/**Aca muestra la pagina de creacion de un producto */
router.get('/products/create', controller.productCreate)
/**Aca por donde pasa la informaion del archivo creado */
router.post('/products/create',controller.create)

module.exports = router;
