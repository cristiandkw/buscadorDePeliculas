const pelis = require("./pelis");

const inputs = process.argv[2];
const propieda = process.argv[3];

function Todas() {
  if (!inputs) {
    console.table(pelis.peliculas());
  }
}

function Parametros() {
  if (inputs === "--sort") {
    console.table(pelis.compararPorTitulo(propieda));
  } else if (inputs === "--search") {
    console.table(pelis.search(propieda));
  } else if (inputs === "--tag") {
    console.table(pelis.etiqueta(propieda));
  }
}

function main() {
  Todas();
  Parametros();

  //Alafeto();
}

main();
