const fs = require("fs");
const { title } = require("process");

function peliculas() {
  const pelis = fs.readFileSync(__dirname + "/pelis.json");

  return JSON.parse(pelis);
}

// funcion para comparar por titulo

function compararPorTitulo(propiedad) {
  const pelis = peliculas();

  return pelis.sort((a, b) => {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });
}

// funcion para buscar peliculas

function search(title) {
  const pelis = peliculas();

  return pelis.filter((peli) =>
    peli.title.toLowerCase().includes(title.toLowerCase())
  );
}

function etiqueta(tags) {
  const pelis = peliculas();

  return pelis.filter((peli) => {
    if (typeof peli.tags === "object") {
      peli.tags = JSON.stringify(peli.tags);
    }
    return peli.tags.toLowerCase().includes(tags.toLowerCase());
  });
}

/*
// funcion para buscar peliculas por etiqueta
function etiqueta(tag) {
  const pelis = peliculas();

  return pelis.filter((peli) =>
    peli.tag.toLowerCase().includes(tag.toLowerCase())
  );
}*/

module.exports = {
  peliculas,
  compararPorTitulo,
  search,
  etiqueta,
};
