const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:qUDJuMMCM7opjIQI@cluster0-pap5m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const leagues = require("./api/routes/leagues");
const teams = require("./api/routes/teams");
const players = require("./api/routes/players");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

client.connect(err => {
  const db = client.db("football");
  app.use("/api/v1/leagues", leagues(db));
  app.use("/api/v1/team", teams(db));
  app.use("/api/v1/player", players(db));
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});
