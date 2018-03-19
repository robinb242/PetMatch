
//STORY: As a user, I want to be able to take a quiz that matches me up with a pet based on my interests, personality, and preferences. The quiz should return the results.
var Nightmare = require("nightmare");
new Nightmare({ show: true })
  //Go to home page
  .goto("http://localhost:3000")
  .wait(2000)
  //Click take quiz button
  .click("#take-quiz-btn")
  .wait(2000)
  //Click start quiz button
  .click("#start-quiz-btn")
  .wait(2000)
  //Click to answer question 1
  .click("#question-1-1")
  .wait(2000)
  //Click to answer question 2
  .click("#question-2-0")
  .wait(2000)
  //Click to answer question 3
  .click("#question-3-1")
  .wait(2000)
  //Click to answer question 4
  .click("#question-4-0")
  .wait(2000)
  //Click to answer question 5
  .click("#question-5-1")
  .wait(2000)
  //Click to answer question 6
  .click("#question-6-0")
  .wait(2000)
  //Click to answer question 7
  .click("#question-7-2")
  .wait(2000)
  //Click to answer question 8
  .click("#question-8-1")
  .wait(2000)
  //Click to answer question 9
  .click("#question-9-4")
  .wait(2000)
  //Click to answer question 10
  .click("#question-10-0")
  .wait(2000)
  //Click to view results
  .click("#view-results-btn")
  .wait(2000)
  //Take a screenshot and save it to the current directory.
  .screenshot("quiz-results.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });

