const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema({
  user_id: {
    type: String,
    index: true,
    require: true
  },

  name: {
    type: String,
    require: true
  },
  sport: {
    type: String,
    require: true
  }
});

const League = (module.exports = mongoose.model("leagues", leagueSchema));

module.exports.getLeagues = function(callback) {
  League.find(callback);
};
