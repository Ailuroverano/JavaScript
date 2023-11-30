/// declaración de las distintas variables.
let cantidadEntradas, tipoEntrada, totalPagar, resumenCompra, precioPorEntrada;

/// función para capturar entrada del usuario.
function capturarEntrada() {
    let inputValido = false;

    while (!inputValido) {
        let inputCantidad = prompt("Ingrese la cantidad de entradas que desea comprar:");

        /// validar que la entrada sea un número.
        if (!isNaN(inputCantidad) && inputCantidad !== null && inputCantidad !== "") {
            cantidadEntradas = parseInt(inputCantidad);
            inputValido = true;
        } else {
            alert("Por favor, ingrese una cantidad válida de entradas.");
        }
    }

    inputValido = false;

    while (!inputValido) {
        tipoEntrada = prompt("Ingrese el tipo de entrada (VIP o general):");

        /// validar que el tipo de entrada sea válido.
        if (tipoEntrada.toLowerCase() === "vip" || tipoEntrada.toLowerCase() === "general") {
            inputValido = true;
        } else {
            alert("El tipo de entrada ingresado no es válido. Por favor, elija VIP o general.");
        }
    }
}

/// función para calcular el total a pagar.
function calcularTotal() {
    /// Precio por tipo de entrada.
    if (tipoEntrada.toLowerCase() === "vip") {
        precioPorEntrada = 100000; 
    } else if (tipoEntrada.toLowerCase() === "general") {
        precioPorEntrada = 50000; 
    }

    totalPagar = cantidadEntradas * precioPorEntrada;
}

// función para mostrar el resumen de la compra.
function mostrarResumenCompra() {
    resumenCompra = `
    Resumen de tu compra:
    Cantidad de entradas: ${cantidadEntradas}
    Tipo de entrada: ${tipoEntrada}
    Total a pagar: $${totalPagar}
    `;

    alert(resumenCompra);
}


capturarEntrada();
calcularTotal();
mostrarResumenCompra();