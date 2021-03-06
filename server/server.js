const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ['http://localhost:4200', 'https://test-dataon-admin-frontend.web.app', 'https://test-dataon-applicant-frontend.web.app']
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "" });
});

require("./app/routes/applicantdata.routes")(app);
require("./app/routes/applicanteducation.routes")(app);
require("./app/routes/applicantexperience.routes")(app);
require("./app/routes/listdegree.routes")(app);
require("./app/routes/listposition.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
