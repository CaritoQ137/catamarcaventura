
let totalGeneral = 0,
    contadordePrductos = 0,
    listadodeProductos = "n\ListadodeProductos:";

function solicitardatosUsuario() {
    let nombre = prompt("Ingrese su nombre:")
    let apellido = prompt("Ingrese su apellido:")

    let nombreCompleto = nombre + " " + apellido

}

function agregarProductos() {
    let confirmacion = confirm ("¿Desea agregar un producto a su carrito de compras?");
    while (confirmacion) {
        introducirDatosdeproducto();

        confirmacion = confirm ("¿Desea agregar un producto a su carrito de compras?");

    }

    if (contadordePrductos > 0) {
        mostrarInfo();
    }
}

function introducirDatosdeproducto() {
    let nombre, precio, cantidad, total;

    nombre = prompt("Ingrese nombre del producto");
    precio = parseFloat(prompt("Ingrese precio del producto"));
    cantidad = parseInt(prompt("Ingrese cantidad del producto"));
    total= calcularTotal (precio, cantidad);
    contadordePrductos++;

    console.log({nombre, precio, cantidad, total})
    
}

function calcularTotal (precio, cantidad) {
    let total = precio *  cantidad;
    totalGeneral += total;

    return total;

}

function mostrarInfo () {
    listadodeProductos += "El total a pagar de todos los productos es de $" + totalGeneral;
    alert(listadodeProductos);
    console.log(listadodeProductos);

}

solicitardatosUsuario();
agregarProductos();



    
