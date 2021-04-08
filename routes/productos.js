var express = require('express');
var router = express.Router();

const productos = [
    {id : 1, nombre : 'Alfajores Cerro Azul Sin Azucar y Sin tacc x12ud', descripcion : 'Alfajor de chocolate con relleno de dulce de leche, cubierto con baño de reposteria semiamargo Sin azucar y Sin tacc. Materia grasa 20%', precio : 840, imagen : 'alfajoresSinazucar.jpg', stock : 0, categoria: "Sin Azucar"},
    {id : 2, nombre : 'Alfajores Cerro Azul Fresa Sin Azucar, Sin Tacc y Veganos x12ud', descripcion : 'Alfajor de chocolate con relleno con sabor a fresa, cubierto con baño de reposteria semiamargo Sin azucar, Sin tacc y Veganos. Materia grasa 20%', precio : 840, stock : 0, imagen : 'alfajoresFresa.jpg', categoria: 'Sin Azucar'},
    {id : 3, nombre : 'Alfajores Cerro Azul Vainilla, Sin tacc y Veganos x12ud', descripcion : 'Alfajor de chocolate con relleno con sabor a Vainilla, cubierto con baño de reposteria semiamargo Sin azucar, Sin tacc y Veganos. Materia grasa 20%', precio : 840, imagen : 'alfajoresVainilla.jpg', stock : 10, categoria: "Sin Azucar" },
    {id : 4, nombre : 'Pan Sin Tacc Cerro Azul x400gr', descripcion : 'Pan de molde libre de gluten. 0% Grasas trans', precio : 200, stock : 10, imagen : 'panSintacc.jpg', categoria: "Sin Tacc" },
    {id : 5, nombre: 'Pan Sin Tacc y Veganos x400gr', descripcion : 'Pan de molde libre de gluten y sin agregado animal. 0% Grasas trans.', precio : 200, imagen : 'panVegano.jpg', stock : 10, categoria: "Sin Tacc" },
    {id : 6, nombre: 'Marbe Galletitas sabor Pasas de uva de Avena con Stevia', descripcion: 'Galletitas light a base de avena, sin azucar, bajas en calorias y alto contenido en fibras endulsadas con Stevia', precio : 55, imagen: 'marbepasas.jpg', stock: 6, categoria: "Sin Azucar" },
    {   id : 7, nombre : 'Marbe Galletitas sabor Limon de Avena con Stevia', descripcion : 'Galletitas light a base de avena, sin azucar, bajas en calorias y alto contenido en fibras endulsadas con Stevia', precio : 55, imagen : 'marbelimon.jpg', stock : 8, categoria: "Sin Azucar" },     
    {id : 8, nombre: 'Marbe Galletitas sabor Naranja de Avena con Stevia', descripcion : 'Galletitas light a base de avena, sin azucar, bajas en calorias y alto contenido en fibras endulsadas con Stevia', precio : 55, imagen : 'marbenaranja.jpg', stock : 8, categoria: "Sin Azucar" },
    {id : 9, nombre: 'Marbe Galletitas sabor Chocolate de Avena con Stevia', descripcion : 'Galletitas light a base de avena, sin azucar, bajas en calorias y alto contenido en fibras endulsadas con Stevia', precio : 55, imagen : 'marbechoco.jpg', stock : 8, categoria: "Sin Azucar" }
]
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

//Definimos Middelware

router.get('/',(req,res) => {
    // res.send("Seccion productos")
    res.render('listProductos.hbs',{title:"Productos",productos:productos,legales:legales,envios:envios})
})

//Pasamos por get el id
router.get('/:id',(req,res) => {
    console.log(req.params.id)

    let idProd = req.params.id

    //Filtrar el id, dentro del array de productos. Devuelve un nuevo array
    let buscarProd = productos.find( productos => productos.id == idProd )

    // console.log(buscarProd)

    res.render('producto.hbs',{title:buscarProd.nombre,producto:buscarProd,legales,envios})

})


module.exports = router;