// Datos para hacer el login en el sitio
const usuario = "admin";
const contrasenia = "1234";

// Clase + Objetos de los prodcutos de la tienda
class Producto {
    constructor(id,nombre,precio,seccion,img) {
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.seccion = seccion;
        this.img = img;
        this.cantidad = 1;
    }
}

const harry_potter = new Producto (1, "harry potter", 8500, "Harry Potter", "img/harry-potter.png");
const vegeta = new Producto (2, "vegeta", 7000, "Anime", "img/anime.png");
const lapras = new Producto (3, "lapras", 6375, "Anime", "img/lapras.jpg");
const capitan_america = new Producto (4, "capitan america", 8000, "Marvel", "img/capitan_america.jpg");
const sylvie = new Producto (5, "sylvie", 7500, "Marvel", "img/loki_sylvie.jpg");
const edward_elric = new Producto (6, "edward elric", 7200, "Anime", "img/edward.jpg");
const minnie_mouse = new Producto (2, "Minnie Mouse (1928)",7500, "Disney", "img/minnie.jpg");
const scarlet_witch = new Producto (4, "Scarlet Witch",7750, "Marvel", "img/scarlet_witch.jpg");

// Array con el catalogo de productos
const stockProductos = [harry_potter, vegeta, lapras, capitan_america, sylvie, edward_elric, minnie_mouse,scarlet_witch]

// Array del carrito + localstorage
let carrito = [];
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// Aplicando DOM
const contenedorProductos = document.getElementById("contenedorProductos");

// Funcion para mostrar los productos
const mostrarProductos = () =>  {
    stockProductos.forEach((producto) => {
        const card = document.createElement ("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="products">
                <div class="products__article">
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <h3> ${producto.nombre}</h3>
                    <h3> $${producto.precio}</h3>
                    <button class="colorBoton" id="boton${producto.id}">Agregar al carrito</button>
                </div>
            </div>
        `

        contenedorProductos.appendChild(card);

        // Agregar productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener ("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
}

// Funcion agregar al carrito
const agregarAlCarrito = (id) => {
    const producto = stockProductos.find ((producto) => producto.id === id);
    const productoEnCarrito = carrito.find ((producto) => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

mostrarProductos();

// Mostrar carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

// Funcion para mostrar el carrito
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const card = document.createElement ("div");
        card.classList.add ("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="products">
                <div class="products__article">
                    <img src = "${producto.img}" alt="${producto.nombre}">
                    <h3> ${producto.nombre}</h3>
                    <h3> $${producto.precio}</h3>
                    <h3> Cantidad: ${producto.cantidad}</h3>
                    <button class="colorBoton" id="borrar${producto.id}">Borrar producto</button>
                </div>
            </div>
        `

        contenedorCarrito.appendChild(card);

        // Eliminar productos del carrito
        const boton = document.getElementById(`borrar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

// Funcion para borrar el producto
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1)
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Vaciar el carrito
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    borrarCarrito();
})

// Funcion para vaciar el carrito
const borrarCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
}

// Valor total de la compra
const valorTotal = document.getElementById("valorTotal");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    valorTotal.innerHTML = `$${totalCompra}`;
} 























