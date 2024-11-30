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

let ej8 = document.getElementById('ej8');
let ej8Ctx = ej8.getContext('2d');

ej8Ctx.strokeStyle = 'green';
ej8Ctx.lineWidth = 5;

ej8Ctx.beginPath();
ej8Ctx.moveTo(50, 50); // Desde este punto vamos moviéndonos hacia los vértices indicados.
ej8Ctx.lineTo(200, 50);
ej8Ctx.lineTo(50, 150);
ej8Ctx.closePath(); // Importante añadir esto para juntar los vértices.
ej8Ctx.stroke();

// Ejercicio 9

let ej9 = document.getElementById('ej9');
let ej9Ctx = ej9.getContext('2d');

ej9Ctx.fillStyle = 'blue';

ej9Ctx.beginPath();
ej9Ctx.moveTo(50, 50);
ej9Ctx.lineTo(200, 50);
ej9Ctx.lineTo(50, 150);
ej9Ctx.closePath();
ej9Ctx.fill();

// Ejercicio 10

let ej10 = document.getElementById('ej10');
let ej10Ctx = ej10.getContext('2d');

ej10Ctx.font = "bold 40px Arial";
ej10Ctx.fillStyle = 'blue';
ej10Ctx.textBaseline = 'middle';

ej10Ctx.fillText("Ejercicio final", 10, 100);

// Ejercicio 11

let canvas = document.getElementById('ej11');
let contexto = canvas.getContext('2d');

contexto.strokeStyle = 'black';
contexto.strokeRect (0, 0, 550, 350);

let gradienteCielo = contexto.createLinearGradient(0, 0, 0, 175);

gradienteCielo.addColorStop(0, '#4682B4');
gradienteCielo.addColorStop(1, '#BDD7FE');

contexto.fillStyle = gradienteCielo;
contexto.fillRect(0, 0, 550, 175);

let gradienteSuelo = contexto.createLinearGradient(0, 175, 0, 350);

gradienteSuelo.addColorStop(0, '#6CBF6C');
gradienteSuelo.addColorStop(1, '#AEDCAE');

contexto.fillStyle = gradienteSuelo;
contexto.fillRect(0, 175, 550, 350);

// gradiente lineal vertical para las montañas
// trazado para montañas
// degradado radial para la nube
// dibujar lluvia
// texto