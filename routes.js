const routes = require("express").Router();
const Cars = require("./db/Cars");

routes.get("/", (req, res) => res.send("welcome"));

routes.get("/cars", (req, res) => {
  Cars.find()
    .limit(10)
    .then((car) => res.json(car));
});

routes.get('/test', (req, res) => {
for (const key in req.query) {
  console.log(key, req.query[key])
}})

module.exports = routes;
