var express = require('express');
var router = express.Router();

//Interface Usuario
function User(nombre, apellido, edad, redes, frase) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.redes = redes
  this.frase = frase}

let user1 = new User("Alejandro","Fausti",03424636716,['alejandromartinfausti@gmail.com'],'Vendedor, Repasrtidor y Dueño')
let user2 = new User("Esteban","Sbodio",03425371420,['esteban.sbodio@gmail.com'],'Vendedor, Repasrtidor y Dueño')


const users = []
users.push(user1,user2)
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //res.render -> 2 parametros ("vista a renderizar", {data})
  res.render('usuarios.hbs',{
    title:"usuarios",
    users
  })
});

module.exports = router;
