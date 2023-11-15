/// hacer que el usuario decida entre dos gustos musicales para luego recomendarle un recital de ese genero. 

let opcionValida = false; ///uso la variable 'opcionValida' inicializada en false para que si el usuario ingresa una opcion que es valida, cambio el valor de la variable a 'true' para salir del bucle (sin tener que usar un break).
let opcionUsuario;

/// bucle while para asegurar que el usuario elija una opcion valida
while (!opcionValida) { /// uso de operador logico en vez de (opcionValida === false). 
    opcionUsuario = prompt("¿Qué tipo de recital prefieres? Ingrese 'rock' o 'pop':");

    if (opcionUsuario === 'rock') {
        alert('Muy buena elección! Te recomendamos el recital de Guasones de 2023.');
        opcionValida = true; /// acá cambio la variable para salir del bucle
    } else if (opcionUsuario === 'pop') {
        alert('Excelente elección! Creemos que podrías disfrutar mucho el recital de Taylor Swift.');
        opcionValida = true;
    } else {
        alert('La opción no es valida. Por favor, elige entre "rock" o "pop".');
    }
}