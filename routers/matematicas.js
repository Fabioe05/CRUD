const express = require("express");

const { matematicas } = require("../datos/cursos").infoCursos;

const routerMatematicas = express.Router();

//Middleware
routerMatematicas.use(express.json());

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter((curso) => curso.tema === tema);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
});

routerMatematicas.get("/:tema/:nivel", (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = matematicas.filter(
    (curso) => curso.tema === tema && curso.nivel === nivel,
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.send(matematicas);
});

routerMatematicas.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas[indice] = cursoActualizado;
  } else {
    res.status(204).send(`No se encontraron los cambios que quieres aplicar.`);
  }
  res.json(matematicas);
});

routerMatematicas.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = matematicas[indice];
    Object.assign(cursoAModificar, infoActualizada);
  } else {
    res.status(204).send(`No se encontraron los cambios que quieres aplicar.`);
  }
  res.json(matematicas);
});

routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas.splice(indice, 1);
  }
  res.json(matematicas);
});

module.exports = routerMatematicas;
