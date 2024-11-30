// Ejercicio 1

let ej1 = document.getElementById('ej1');
let ej1Ctx = ej1.getContext('2d');

// Definimos el color y el grosor de la línea.
ej1Ctx.strokeStyle = 'red';
ej1Ctx.lineWidth = 5;

// Dibujamos la línea en las coordenadas indicadas.
ej1Ctx.beginPath();
ej1Ctx.moveTo(50, 50);
ej1Ctx.lineTo(350, 350);
ej1Ctx.stroke();

// Ejercicio 2

let ej2 = document.getElementById('ej2');
let ej2Ctx = ej2.getContext('2d');

ej2Ctx.strokeStyle = 'blue';
ej2Ctx.lineWidth = 5;

ej2Ctx.beginPath();
ej2Ctx.strokeRect(50, 50, 150, 100);

// Ejercicio 3

let ej3 = document.getElementById('ej3');
let ej3Ctx = ej3.getContext('2d');

ej3Ctx.fillStyle = 'green';
ej3Ctx.fillRect(50, 50, 150, 100);

// Ejercicio 4

let ej4 = document.getElementById('ej4');
let ej4Ctx = ej4.getContext('2d');

ej4Ctx.strokeStyle = 'red';
ej4Ctx.lineWidth = 2;

ej4Ctx.beginPath();
ej4Ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ej4Ctx.stroke();

// Ejercicio 5

let ej5 = document.getElementById('ej5');
let ej5Ctx = ej5.getContext('2d');

ej5Ctx.fillStyle = 'red';

ej5Ctx.beginPath();
ej5Ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ej5Ctx.fill();

// Ejercicio 6

let ej6 = document.getElementById('ej6');
let ej6Ctx = ej6.getContext('2d');

ej6Ctx.strokeStyle = 'blue';
ej6Ctx.lineWidth = 2;

ej6Ctx.beginPath();
ej6Ctx.ellipse(200, 100, 100, 60, 0, 0, 2 * Math.PI);
ej6Ctx.stroke();

// Ejercicio 7

let ej7 = document.getElementById('ej7');
let ej7Ctx = ej7.getContext('2d');

ej7Ctx.fillStyle = 'red';

ej7Ctx.beginPath();
ej7Ctx.ellipse(200, 100, 100, 60, 0, 0, 2 * Math.PI);
ej7Ctx.fill();

// Ejercicio 8

