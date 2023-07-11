// ejercicio n° 1 //

function determinaParOImpar(number) {
    const Par = number % 2 === 0
    if (Par) {
        console.log(`${number} es un número par`);
    } else if (number % 2 !== 0 && number % 2 !== 1) {
        console.log("Ingrese un numero");
    } else {
        console.log(`${number} es un número impar`);
    }
}

// ejercicio n° 2 //

function numeroMayor(n1, n2) {
    if (n1 > n2) {
        console.log(` ${n1} es mayor a ${n2}`);
    }
    if (n2 > n1) {
        console.log(` ${n2} es mayor a ${n1}`);
    }
    if (n1 == n2) {
        console.log(`ambos números son iguales`);
    }
}

// ejercicio n° 3 //

function multiploDe5(number) {
    const multiplo = number % 5 === 0
    if (multiplo) {
        console.log(` ${number} es múltiplo de 5`);
    } else {
        console.log(" el número indicado no es múltiplo de 5");
    }
}

// ejercicio n° 4 //

function enumeraNumeros(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

// ejercicio n° 5 //

function palabraNumero(string, number) {
    for (let i = 1; i <= number; i++) {
        console.log(i + "" + string);
    }
}

// ejercicio n° 6 //

let HistoriadoresMarxistas = ["Hobsbawm", "Thompson", "Hill", "Samuel", "Dobb"];
let HistoriadoresAnnales = ["Febvre", "Bloch", "Braudel", "Michelet", "Furet"];
function valoresArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// ejercicio n° 7 //

function todoslosArrayMenos5(array) {
    for (let i = 0; i <array.length; i++) {
        if (i !== 4) {
            console.log (array[i])
        }
    }
} 
const Sin5ta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ejercicio n° 8 //

function arrayMultiplicado(array, number) {
    for (let i = 0; i < array.length; i++) {
        console.log (array[i] * number);
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = 10;
