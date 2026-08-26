// ===== Actividad 1 =====
// Ejercicio 1: TODO - declarar variables de distintos tipos y mostrarlas

let palabra = "papa"; //Se declara un string
let numero = 5; //Se declara un number
let booleano = true; //Se declara un boolean
let arreglo = [4, 5, 6]; //Se declara un array
let objeto = {nombre: "cosa", atributo: "valor"}; //Se declara un objeto

// Ejercicio 2: TODO - usar typeof sobre cada variable

console.log(typeof(palabra)); //Se muestra como string
console.log(typeof(numero)); //Se muestra como number
console.log(typeof(booleano)); //Se muestra como boolean
console.log(typeof(arreglo)); //El array se muestra como tipo object
console.log(typeof(objeto)); //Se muestra como object

// Ejercicio 3: TODO - declarar una const y comentar qué pasa si se reasigna

const constante = 7;
console.log("La constante es: ", constante);

//const constante = 8;
//Al intentar cambiar el valor de la constante el sistema nos informa que ya fue declarada
//y la consola devuelve la excepción: Uncaught SyntaxError: Identifier 'constante' has already been declared


// ===== Actividad 2 =====

// Ejercicio 4: TODO - operadores aritméticos (+, -, *, /, %)

let num1 = 8;
let num2 = 5;

console.log("Suma: ", num1 + num2); //13
console.log("Resta: ", num1 - num2); //3
console.log("Producto: ", num1 * num2); //40
console.log("División: ", num1 / num2); //1.6
console.log("Módulo: ", num1 % num2); //3

// Ejercicio 5: TODO - comparar == vs === con al menos dos casos

let cincoEntero = 5; //Se declara un número
let cincoString = "5"; //Se declara un string

console.log("Numero y String con igualdad flexible: ", cincoEntero == cincoString); //Como el contenido es igual da true
console.log("Numero y String con igualdad estricta: ", cincoEntero === cincoString); //Como el contenido es igual pero el tipo es distinto da false

let nombreString = "Ana"; //Se declara un string
let nombreObjeto = ["Ana"]; //Se declara un array

console.log("String y Array con igualdad flexible: ", nombreString == nombreObjeto); //Como el contenido es igual da true
console.log("String y Array con igualdad estricta: ", nombreString === nombreObjeto); //Como el contenido es igual pero el tipo es distinto da false


// Ejercicio 6: TODO - if/else para saber si un número es par o impar

let numeroPar = 20; //Se declara un número par
let numeroImpar = 7; //Se declara un número impar

if ((numeroPar % 2) == 0){ //Si el resto de dividir por 2 es cero el número es par
    console.log("El número ", numeroPar, " es par."); //Como el número es par se ingresa a esta condición
}else {
    console.log("El número ", numeroPar, " es impar.");
}

if ((numeroImpar % 2) == 0){
    console.log("El número ", numeroImpar, " es par."); //Como el número es impar no se ingresa a esta condición
}else {
    console.log("El número ", numeroImpar, " es impar.");
}


// Ejercicio 7: TODO - bucle for que recorra un array


let arrayDeBucle = ["S", "O", "G", "T", "U", "L", "A", "K", "K", "C", "K"]; //Se declara un array


console.log("Valores e índices del array: ")
for (let i = 0; i < arrayDeBucle.length; i++){
    console.log("Índice: ", i , ". Valor: ", arrayDeBucle[i], "."); //Se recorre el bucle y devuelve el índice y valor del array en el índice
}

// Ejercicio 8: TODO - bucle while que cuente del 1 al 5

let numIndice = 1; //Se declara el número 1 como índice para contar

while (numIndice <= 5){ //Se repite mientras el número sea menor o igual a 5
    console.log("Contador: ", numIndice);
    numIndice++; //Se incrementa el valor del índice, cuando llega a 6 sale del bucle
}


