const routes = require("express").Router();
const Cars = require("./db/Cars");

routes.get("/", (req, res) => res.send("welcome"));

routes.get("/cars", (req, res) => {
  Cars.find()
    .limit(10)
    .then((car) => res.json(car));
});

routes.get("/test", (req, res) => {
  let queryString = ""
  for (let key in req.query) {
    queryString += `${key}: "${req.query[key]}", `;
  }
  console.log(queryString)
})

routes.get("/test2", (req, res) => {
  Cars.find( {manufacturer: "ford", paint_color: "red"})
  .limit(500)
  .then((filter) => res.send(filter)
);
})

//find distinct values for filter
routes.get("/manufacturers", (req, res) => {
  Cars.find()
    .distinct("manufacturer", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

routes.get("/year", (req, res) => {
  Cars.find()
  .distinct("manufacturer", function(error, filter) {
    return filter
  })
  .then((filter) => res.send(filter))
})

routes.get("/price", (req, res) => {
  Cars.find()
    .distinct("price", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

routes.get("/model", (req, res) => {
  Cars.find()
    .distinct("model", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

routes.get("/size", (req, res) => {
  Cars.find()
    .distinct("size", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

routes.get("/color", (req, res) => {
  Cars.find()
    .distinct("paint_color", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

routes.get("/state", (req, res) => {
  Cars.find()
    .distinct("state", function (error, filter) {
      return filter;
    })
    .then((filter) => res.send(filter));
});

module.exports = routes;