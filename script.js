// Datos para hacer el login en el sitio
const usuario = "admin";
const contrasenia = "1234";

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
        productos()
    }else {
        alert ("El usuario y la contraseña ingresados son invalidos." + "\nIntentelo nuevamente.")
    }   
}
login();

// Función que le solicita al usuario elegir los productos que desea comprar
function productos () {
    let productoElegido = prompt ("Ingrese el ID del producto que desea comprar." +  "\nPara finalizar la compra ingrese la palabra: terminar");
    while (productoElegido != "terminar") {
        switch(productoElegido) {
            case "1":
                console.log ("Se agregó la figura Harry Potter al carrito");
                break;
            case "2":
                console.log ("Se agregó la figura Vegeta al carrito");
                break;
            case "3":
                console.log ("Se agregó la figura Lapras al carrito");
                break;
            case "4":
                console.log ("Se agregó la figura Capitan America al carrito");
                break;
            case "5":
                console.log ("Se agregó la figura Sylvie al carrito");
                break;
                case "6":
                    console.log ("Se agregó la figura Edward Elric al carrito");
                    break;            
            default:
                alert ("El ID seleccionado es invalido." + "\nIntente nuevamente.")
    }
    productoElegido = prompt ("Ingrese el ID del producto que desea comprar." +  "\nPara finalizar la compra ingrese la palabra: terminar");
}
if (productoElegido === "terminar") {
    alert("Gracias por su compra!")
}
}