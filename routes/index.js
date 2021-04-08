//importa Express
var express = require('express');

//Para utilizar las rutas, por medio de express
var router = express.Router();

const data = {
  nombre: "Alejandro Fausti",
  localidad: "Santa Fe"
}

/* llamada http -> GET */
router.get('/', function(req, res, next) {
  //res.render -> renderiza una vista
    //interpolacion de datos -> la ruta le manda a la vista (.hbs), informacion en un objeto
    res.render('index.hbs', {title:"",data:data});
});


module.exports = router;
