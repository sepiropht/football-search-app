const express = require("express");
const router = express.Router();
const ObjectID = require('mongodb').ObjectID

module.exports = db => {
  return router.get("/id", (req, res, _) => {
    console.log("ROUTE TEAMSSSSS");
    const { id } = req.query;
    console.log(id)
    db.collection("teams")
      .find({ _id: ObjectID(id) })
      .toArray((error, documents) => {
        if (error) throw error;
        console.log(documents)
        res.send(documents[0]);
      });
  });
};