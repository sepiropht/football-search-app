const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const leagues = require("./api/routes/leagues");

const app = express();


// mongoose.connect(
//   "mongodb://root:azerty@ds139480.mlab.com:39480/pinterest-clone"
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/leagues", leagues);

const distDir = __dirname + "/dist/";
console.log(distDir)
app.use(express.static(distDir));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log("App now running on port", port);
});
