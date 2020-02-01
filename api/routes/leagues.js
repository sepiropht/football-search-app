const express = require("express");
const router = express.Router();

module.exports = db => {
  return router.get("/search", (req, res, _) => {
    const { search } = req.query;
    db.collection("leagues")
      .find({ name: { $regex: `.*${search}.*` } })
      .toArray((error, documents) => {
        if (error) throw error;
        res.send(documents);
      });
  });
};
