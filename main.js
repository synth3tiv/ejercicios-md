// 01. Calcular el área de un triángulo
let base = 5;
let altura = 7;
const areaTriangulo = base * altura / 2;
console.log(`01. El área de un triángulo de base ${base} y altura ${altura} es: ${areaTriangulo}`);

// 02. Convertir grados Celsius a Fahrenheit.
let gradosCelsius = 20;
let gradosFahrenheit = gradosCelsius * 9 / 5 + 32;
console.log("02. " + gradosCelsius + "°C son " + gradosFahrenheit + "°F");

//03. Encontrar el máximo de dos números.
let num1 = 50;
let num2 = 100;
let numeroMaximo = Math.max(num1, num2);
console.log("03. El máximo entre " + num1 +" y " + num2 + " es: " + numeroMaximo);

//04. Calcular el factorial de un número.
let numero = 3;
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log("04. El factorial de " + numero + " es: " + factorial);