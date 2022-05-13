// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    var array = [];
    for (var prop in objeto) {
        array.push([prop, objeto[prop]]);
    }
    return array;
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    var array = [];
    var iteractor = 0;
    var len = 0;
    var str = string;

    function cl(a2) {
        this.a2 = a2.split('');
        this.a3 = this.a2.filter((item) => item === this.a2[0]);
        this.a4 = this.a2.filter((item) => item !== this.a2[0]);
    }

    function x(xx) {
        var cad = new cl(xx);
        array.push([cad.a3[0], cad.a3.length]);
        len = cad.a4.length;
        str = cad.a4.join('');
        iteractor = cad.a4.length;
    }

    x(str);

    while (iteractor !== 0) {
        if (len !== 1) {
            x(str);
        } else {

            x(str);
            iteractor = 0;
        }
    }

    function obj(array) {
        return array.reduce(function(p, c) {
            p[c[0]] = c[1];
            return p;
        }, {});
    }
    return obj(array);
}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    var may = [];
    var min = [];
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            may.push(s.charAt(i));
        } else {
            min.push(s.charAt(i));
        }
    }
    s = may.join('') + min.join('');
    return s;
}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var array = str.split(' ');
    var newarray = [];
    array.forEach(element => {
        newarray.push([...element].reverse().join(''));
    });
    return newarray.join(' ');
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    var atex = numero.toString().split('');
    var len = atex.length;

    function evaluar(media) {
        console.log(media);
        var lft = "";
        var drh = "";
        for (var i = 0; i <= (media - 1); i++) {
            lft += atex[i];
            drh += atex[len - 1 - i];
        }
        if (lft === drh) {
            //console.log("cierto");
            return "Es capicua";
        } else { //console.log("falso"); 
            return "No es capicua";
        }
    }

    if (len % 2 === 0) {
        var med = len / 2;
        return evaluar(med);
    } else {
        var med = (len - 1) / 2;
        return evaluar(med);
    }


}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    var array = ["a", "b", "c"];
    var cad = cadena.split('');
    var result = array.reduce((p, e) => {
            console.log(e);
            console.log(p);
            return p.filter((item) => item !== e);
        },
        cad);
    cadena = result.join('');
    return cadena;
}




function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    arr.sort(function(a, b) { return a.length - b.length }, [])
    return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    var result = arreglo1.filter(function(e) { return arreglo2.indexOf(e) > -1 });
    return result;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};