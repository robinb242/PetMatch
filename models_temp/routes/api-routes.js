// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {


  


// Add user answers to user-answers db
  app.post("/api/postuseranswers", function(req, res) {
    console.log("User Answers:");
    console.log(req.body);
    user_answers.create({
      trait_kids: req.body.trait_kids,
      trait_active: req.body.trait_active,
      trait_security: req.body.trait_security,
      trait_independent: req.body.trait_independent,
      trait_cuddly: req.body.trait_cuddly,
      trait_space: req.body.trait_space,
      trait_size: req.body.trait_size,
      trait_affection: req.body.trait_affection,
      trait_clean: req.body.trait_clean,
      trait_unconventional: req.body.trait_unconventional
    });
  });

  app.get("/api/getcurrentuseranswers", function(req, res) {

  user_answers.findAll({}).then(funnction(results){

  res.json(results);
});

});


app.post("/api/friends", function(req,res){
  var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

//for loop runs through friends
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
//run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

//push results into scoresArray
      scoresArray.push(scoresDiff);
    }

//after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

//return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

//pushes new submission into the friendsList array
    friendList.push(req.body);
  });
};

  // Delete a book
  app.post("/api/site_evaluation", function(req, res) {
    console.log("Site Ranking:");
    console.log(req.body);
    site_evaluation.create({
   siteRanking: req.body.siteRanking
      }
    });
  });
};

