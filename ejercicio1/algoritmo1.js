const PI = 3.1416;

let radio = 5;
let resultado;

if (radio > 0) {
  resultado = 2 * PI * radio;
} else {
  resultado = "El radio debe ser mayor a 0";
}

console.log(resultado);