const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;

module.exports = db => {
  return router.get("/id", (req, res, _) => {
    const { id } = req.query;
    console.log(id);
    db.collection("players")
      .find({ _id: ObjectID(id) })
      .toArray((error, documents) => {
        if (error) throw error;
        res.send(documents[0]);
      });
  });
};
