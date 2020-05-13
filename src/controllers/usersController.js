const fs = require('fs');
const path = require('path')

let usersController = {
    login:function(req,res,next){
        /**Aca debo mostrar el E-mail y el Pass para la corroboracion de la registracion */
    },
    register:function(req, res){
        /**Aca se muestra el formulario de registracion */
    },
    registerDate:function(req,res){
        /**Aca llega toda la informacion necesaria de el usuario */
    }
}

module.exports = usersController;