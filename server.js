const express = require("express");
const cors = require("cors");
const routes = require("./routes");

//config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/", routes);

//listener
app.listen(port, () => console.log(`listening on ${port} 🥡`));
