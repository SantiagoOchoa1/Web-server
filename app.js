require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estático
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Render de páginas",
    name: "Santiago Ochoa",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Render de páginas",
    name: "Santiago Ochoa",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Render de páginas",
    name: "Santiago Ochoa",
  });
});

app.get("*", (req, res) => {
  res.send("404|Page not found");
});

app.listen(port, console.log(`Escuchando en http://localhost:${port}`));
