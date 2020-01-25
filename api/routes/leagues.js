const express = require("express");
const router = express.Router();
const getLeagues = require("../models/leagues");

/* GET users listing. */
router.get("/search", function(req, res, _) {
  const { search } = req.query
  const results = [
    "liga",
    "bundesliga",
    "calcio",
    "first league",
    "ligue1 confonrama"
  ].filter(league => league.startsWith(search));
  res.json({ results });
});

module.exports = router;
