
// ========================================
// EJERCICIO 1: RAICES DE UNA ECUACION
// ========================================

// Obtener el formulario y el lugar del resultado
let formRaices = document.getElementById("formRaices");
let resultadoRaices = document.getElementById("resultadoRaices");
 
// Detectar cuando el usuario envia el formulario
formRaices.addEventListener("submit", function(event) {

    // Evitar que la pagina se recargue
    event.preventDefault();

    // ENTRADA DE DATOS
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    // COMPROBAR QUE LA ECUACION SEA CUADRATICA
    if (a === 0) {

        resultadoRaices.textContent =
            "Error: el valor de a debe ser diferente de cero.";

    } else {

        // CALCULAR EL DISCRIMINANTE
        let D = b * b - 4 * a * c;

        // DETERMINAR LAS RAICES
        if (D > 0) {

            // EXISTEN DOS RAICES REALES
            let x1 = (-b + Math.sqrt(D)) / (2 * a);
            let x2 = (-b - Math.sqrt(D)) / (2 * a);

            resultadoRaices.textContent =
                "La ecuacion tiene dos raices reales." +
                " Discriminante: " + D.toFixed(2) +
                ". Raiz 1: " + x1.toFixed(2) +
                ". Raiz 2: " + x2.toFixed(2);

        } else if (D === 0) {

            // EXISTE UNA RAIZ REAL DOBLE
            let x = -b / (2 * a);

            resultadoRaices.textContent =
                "La ecuacion tiene una raiz real doble." +
                " Discriminante: " + D.toFixed(2) +
                ". Raiz: " + x.toFixed(2);

        } else {

            // NO EXISTEN RAICES REALES
            resultadoRaices.textContent =
                "La ecuacion no tiene raices reales." +
                " Discriminante: " + D.toFixed(2);
        }
    }
});


// ========================================
// EJERCICIO 2: SUMATORIA PARA APROXIMAR PI
// ========================================

// Obtener el formulario y el lugar del resultado
let formPi = document.getElementById("formPi");
let resultadoPi = document.getElementById("resultadoPi");

// Detectar cuando el usuario envia el formulario
formPi.addEventListener("submit", function(event) {

    // Evitar que la pagina se recargue
    event.preventDefault();

    // ENTRADA DE DATOS
    let n = Number(document.getElementById("n").value);

    // COMPROBAR LOS DATOS
    if (!Number.isInteger(n) || n < 1 || n > 1000000) {

        resultadoPi.textContent =
            "Error: ingresa un numero entero entre 1 y 1000000.";

    } else {

        // INICIALIZAR LA SUMATORIA
        let suma = 0;

        // CALCULAR LA SUMATORIA CON UN CICLO FOR
        for (let i = 1; i <= n; i++) {
            suma = suma + 1 / (i * i);
        }

        // CALCULAR LA APROXIMACION DE PI
        let pi = Math.sqrt(6 * suma);

        // MOSTRAR LOS RESULTADOS CON DOS DECIMALES
        resultadoPi.textContent =
            "Numero de terminos: " + n +
            ". Sumatoria: " + suma.toFixed(2) +
            ". Pi aproximado: " + pi.toFixed(2) +
            ". Valor real de pi: " + Math.PI.toFixed(2);
    }

});


 // EJERCICIO 5: REPARTO DE JOYAS

let formJoyas = document.getElementById("formJoyas");
let resultadoJoyas = document.getElementById("resultadoJoyas");

formJoyas.addEventListener("submit", function(event) {

    event.preventDefault();

    // ENTRADA DE DATOS
    let total = Number(document.getElementById("totalJoyas").value);
    let p1 = Number(document.getElementById("porcentaje1").value);
    let p2 = Number(document.getElementById("porcentaje2").value);

    // VALIDAR LOS DATOS
    if (
        !Number.isInteger(total) || total < 0 ||
        p1 < 0 || p1 > 100 ||
        p2 < 0 || p2 > 100 ||
        p1 + p2 > 100
    ) {

        resultadoJoyas.textContent =
            "Error: revisa el total y los porcentajes.";

    } else {

        // PROCESO: CALCULAR LAS JOYAS
        let joyas1 = total * p1 / 100;
        let joyas2 = total * p2 / 100;
        let sobrante = total - joyas1 - joyas2;

        // SALIDA DE DATOS
        resultadoJoyas.textContent =
            "Primer heredero: " + joyas1.toFixed(2) +
            " joyas.\nSegundo heredero: " + joyas2.toFixed(2) +
            " joyas.\nJoyas restantes: " + Math.round(sobrante) +
            " joyas.";
    }

});


// EJERCICIO 6: SUMA DE NUMEROS PARES

let formNumeros = document.getElementById("formNumeros");

let resultadoNumeros =
    document.getElementById("resultadoNumeros");

formNumeros.addEventListener("submit", function(event) {

    event.preventDefault();

    // ENTRADA DE DATOS
    let limite = Number(document.getElementById("limite").value);

    if (
        !Number.isInteger(limite) ||
        limite < 1 ||
        limite > 100000
    ) {

        resultadoNumeros.textContent =
            "Ingresa un entero entre 1 y 100000.";

    } else {

        // INICIALIZAR VARIABLES
        let suma = 0;
        let cantidad = 0;

        // PROCESO CON FOR
        for (let i = 1; i <= limite; i++) {

            if (i % 2 === 0) {

                suma = suma + i;
                cantidad = cantidad + 1;

            }

        }

        // SALIDA DE DATOS
        resultadoNumeros.textContent =
            "Número límite: " + limite +
            ". Cantidad de números pares: " + cantidad +
            ". Suma de los números pares: " + suma;
    }

});
