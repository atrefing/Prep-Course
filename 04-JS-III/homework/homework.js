// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    var elementos = array.length
    return array[elementos - 1];
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var elementos = array.length - 1;
    for (var i = 0; i <= elementos; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    var dato = array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    var dato = array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var frase = palabras.join(' ');
    return frase;
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    return array.includes(elemento);
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let sum = 0;
    numeros.map(val => sum += val)
    return sum;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let sum = 0;
    var dato = resultadosTest.map(val => sum += val)
    return sum / resultadosTest.length;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    return Math.max(...numeros)
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length === 0) {
        return 0;
    } else if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length > 1) {
        let multi = 1;
        var args = Array.prototype.slice.call(arguments);
        console.log(args);
        args.map(val => multi = multi * val)
        return multi;
    }
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let contador = 0;
    arreglo.map(val => { if (val > 18) { contador++; } });
    return contador;
}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    //var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves","Viernes","Sabado"]
    var semana = [1, 2, 3, 4, 5, 6, 7]
    if (semana.indexOf(numeroDeDia) === 0 || semana.indexOf(numeroDeDia) === 6) {
        return "Es fin de semana";
    } else {
        return "Es dia Laboral";
    }
}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    if (String(n)[0] === '9') {
        return true;
    } else {
        return false;
    }
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    let largo = arreglo.length;
    let flag = false;
    for (var i = 0; i < (largo - 1); i++) {
        if (arreglo[i] === arreglo[i + 1]) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
}

function compareNumbers(a, b) {
    return a - b;
}

function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
        orden = [];
        orden.push(array.indexOf("Enero"));
        orden.push(array.indexOf("Marzo"));
        orden.push(array.indexOf("Noviembre"));
        orden.sort(compareNumbers);
        anio = []
        for (var i = 0; i < 3; i++) {
            anio.push(array[orden[i]]);
        }

        return anio;
    } else {
        return "No se encontraron los meses pedidos";
    }
}


function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var nuevoarray = [];
    array.map((element) => {
        if (element > 100) {
            nuevoarray.push(element);
        }
    });
    return nuevoarray;

}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let num = [];
    num.push(numero + 2);
    var frase = "";
    //console.log("uno :" +num[0])
    for (var i = 1; i < 10; i++) {

        num.push(num[num.length - 1] + 2);
        //console.log(num[i]);
        if (num[i] === i + 1) {
            frase = "Se interrumpió la ejecución"
            break;
        }
    }
    if (frase.length > 0) { return frase; } else {
        return num;
    }
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let i = 0;
    let num = [];
    num[i] = numero + 2;
    while (i < 9) {
        i++;
        if (i === 5) {

            continue;
        } else {
            num.push(num[num.length - 1] + 2);
        }

    }
    return num;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};