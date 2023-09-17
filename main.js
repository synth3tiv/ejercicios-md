// 01. Calcular el área de un triángulo
let base = 5;
let altura = 7;
const areaTriangulo = base * altura / 2;
console.log(`01. El área de un triángulo de base ${base} y altura ${altura} es: ${areaTriangulo}`);

// 02. Convertir grados Celsius a Fahrenheit.
let gradosCelsius = 20;
let gradosFahrenheit = gradosCelsius * 9 / 5 + 32;
console.log("02. " + gradosCelsius + "°C son " + gradosFahrenheit + "°F");

// 03. Encontrar el máximo de dos números.
let num1 = 50;
let num2 = 100;
let numeroMaximo = Math.max(num1, num2);
console.log("03. El máximo entre " + num1 +" y " + num2 + " es: " + numeroMaximo);

// 04. Calcular el factorial de un número.
let numero = 3;
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log("04. El factorial de " + numero + " es: " + factorial);

// 05. Verificar si un número es primo.
let numeroPrimo = 12;
let esPrimo = true;
for (let i = 2; i < numeroPrimo; i++) {
    if (numeroPrimo % i == 0) {
        esPrimo = false;
        break;
    }
}
console.log("05. ¿El número " + numeroPrimo + " es primo? " + esPrimo);

// 06. Revertir una cadena de texto.
let cadena = "Adios Mundo!"; // cadena original
let cadenaRevertida = ""; // cadena nueva
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaRevertida += cadena[i];
}
console.log("06. La cadena revertida de " + cadena + " es: " + cadenaRevertida);

// 07. Calcular la suma de los primeros N números naturales.
let n = 10;
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += i;
}
console.log("07. La suma de los primeros " + n + " números naturales es: " + suma);

// 08. Encontrar el elemento más grande en un arreglo.
let arreglo = [100, 1, 10, 4, 15, 940, 18, 60];
let elementoMayor = Math.max(...arreglo); // "La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada"
console.log("08. El elemento más grande del arreglo [" + arreglo + "] es: " + elementoMayor);

// 09. Verificar si una palabra es un palíndromo.

// 10. Generar un número aleatorio en un rango dado.
let desde = 1;
let hasta = 100;
let numeroAleatorio = Math.floor(Math.random() * (hasta - desde + 1)) + desde;
// La función Math.random() devuelve un número entre 0 y 1.
// El operador * multiplica el resultado de Math.random() por el rango de valores especificados, que es 99.
// El operador + agrega el valor mínimo al resultado, que es 1.
// Finalmente, la función Math.floor() redondea el resultado hacia abajo, que es un número entero.
console.log("10. El número aleatorio entre " + desde + " y " + hasta + " es: " + numeroAleatorio);