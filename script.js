// Datos para hacer el login en el sitio
const usuario = "admin";
const contrasenia = "1234";

// Clase + Objetos de los prodcutos de la tienda
class Producto {
    constructor(nombre,precio,seccion) {
        this.nombre = nombre;
        this.precio = precio;
        this.seccion = seccion;
        this.cantidad = 10;
    }
}

const harry_potter = new Producto ("harry potter", 8500, "Harry Potter");
const vegeta = new Producto ("vegeta", 7000, "Anime");
const lapras = new Producto ("lapras", 6375, "Anime");
const capitan_america = new Producto ("capitan america", 8000, "Marvel");
const sylvie = new Producto ("sylvie", 7500, "Marvel");
const edward_elric = new Producto ("edward elric", 7200, "Anime");

const stockProductos = [harry_potter, vegeta, lapras, capitan_america, sylvie, edward_elric]

console.log ("Nuestros productos:")
stockProductos.forEach ((producto) => {
console.log (producto);
})

// Función que valida los datos del usuario para ingresar al sitio
function login () {
    let loginUsuario = prompt ("Ingrese su usuario")
    let logincontrasenia = prompt ("Ingrese su contraseña")

    if (loginUsuario === usuario && logincontrasenia != contrasenia) {
        alert("La contraseña ingresada es invalida." + "\nIntentelo nuevamente.")
    }else if (loginUsuario != usuario && logincontrasenia == contrasenia) {
        alert("El usuario ingresado es invalido." + "\nIntentelo nuevamente.")
    }else if (loginUsuario === usuario && logincontrasenia === contrasenia) {
        alert("Bienvenido a la tienda!")
        buscador()
    }else {
        alert ("El usuario y la contraseña ingresados son invalidos." + "\nIntentelo nuevamente.")
    }   
}
login();


// Ordenamos los productos de menor a mayor según su precio
stockProductos.sort ( (a,b) => a.precio - b.precio);
console.log ("Productos ordenados por menor precio:");
console.log (stockProductos);

// Productos con IVA
const productosIva = stockProductos.map ((producto) => {
    return {
        nombre: producto.nombre,
        precio: (producto.precio * 1.21)
    }
});

console.log ("Productos con IVA:");
console.log (productosIva);

// Precio total de los productos en el carrito
let precioTotal = stockProductos.reduce ((acumulador, elemento) => acumulador + elemento.precio, 0);
console.log ("El precio total de su compra es:")
console.log (precioTotal);

// Buscar un producto
function buscador () {
let buscarProducto = prompt ("Ingrese el nombre del producto que desea buscar");
const busqueda = stockProductos.find (producto => producto.nombre.includes(buscarProducto));
console.log ("Resultado de la busqueda:");
console.log (busqueda);
}

// Filtrado de productos según sección Marvel
const productosMarvel = stockProductos.filter (producto => producto.seccion === "Marvel");
console.log ("Los productos de Marvel son los siguientes:");
console.log (productosMarvel);