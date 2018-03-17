//Create variable to hold count that will keep track of the index of the currently displayed question.
var count = 0;

//Create variable to hold the user's choice/answer.
var userChoice;

//Create variable for choice button so that we can create it using jQuery.
var choiceBtn;

//Create variable for View Quiz Results button so that we can create it using jQuery.
var resultsBtn;

//Create variable to hold all questions.
var questionSet = {
    questionArray: [{
        question: "I would prefer a pet that is good around other dogs and other people, especially children.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question:  "I would like to have a pet that enjoys being outdoors and and that would like exercising with me.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question: "I would like a pet that is loyal and able to be trained to protect me and my family.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question: "I consider myself to be an affectionate, emotional person.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question: "I prefer a pet that likes to stay inside and cuddle with me.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question: "I have a big backyard.",
        choices: ["YES", "NO"]
        }, {
        question: "What size pet are you looking for?",
        choices: ["SMALL", "MEDIUM", "LARGE"]
        }, {
        question: "I don't mind a pet that is always willing to give me affection and is very energetic.",
        choices: ["AGREE", "DISAGREE"]
        }, {
        question: "I always keep my house clean and organized.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"]
        }, {
        question: "I would like a pet other than a cat or dog.",
        choices: ["AGREE", "DISAGREE"]
        }]
};

//Hide question-div at start of quiz.
$("#question-div").hide();

//Hide progress bar at start of quiz.
$("#quiz-progress-bar").hide();

//When start quiz button is clicked, start quiz.
$("#start-quiz-btn").on("click", function() {
	start();
});


//Start quiz function
function start() {
    //Hide start quiz button.
    $("#start-quiz-btn").hide();
    //Hide quiz instructional text.
    $("#quiz-instructions").hide();
    //Show progress bar when quiz is started.
    $("#quiz-progress-bar").show();
    //Show the question-div at the start of the quiz. Display question and choices based on the current count. Count starts at 0.
    $("#question-div").show().html("<h1> " + questionSet.questionArray[count].question + "</h1>");
    //Loop through the number of choices. For each choice that the user can guess...
	for (var i = 0; i < questionSet.questionArray[count].choices.length; i++) {
		//Create a button (choiceBtn).
		var choiceBtn = $("<button>");
		//Add semantic UI styling to the button to make the button look cool.
		choiceBtn.addClass("ui fluid blue button choiceBtn");
		//Give each button a data attribute called data-choice.
		choiceBtn.attr("data-choice", questionSet.questionArray[count].choices[i]);
		//Then give each choiceBtn a text equal to questionSet.questionArray[count].choices[i]
		choiceBtn.text(questionSet.questionArray[count].choices[i]);
		//Append choiceBtn to question-div so that it appears right below the question.
		$("#view-quiz-results-div").show().append(choiceBtn);
		//When user clicks the choiceBtn, go to next question.
		choiceBtn.click(nextQuestion);
	}
}

//When user answers a quiz question, go to the next question.
function nextQuestion() {
	//Increment the quiz question count by 1
    count++
    //Remove previous question from HTML before going onto the next question in the quiz.
    $("#question-div").hide();
    //Remove choice buttons from previous question from HTML.
    $("#view-quiz-results-div").empty();
    //Increment progress bar by 10 for each question.
    $('#quiz-progress-bar')
        .progress('increment', 10);
            //If the count is the same as the length of the questionSet.questionArray array, find match.
            if (count === questionSet.questionArray.length) {
                findMatch();
            }

            //else, if there are still questions left, go to next question.
            else {
                start();
            }
    }

    $('#quiz-progress-bar')
        .progress({
            text: {
            active  : '{value} %',
            success : '{total} %',
            }
        });

//After user answers all of the questions, calculate results.
function findMatch() {
    $("#question-div").show().html("<h1>" + "Your results are ready!" + "</h1>");
    //Create a button (resultsBtn).
    resultsBtn = $("<button>");
    resultsBtn.html("<h2>" +  "View results" + "</h2>");
    resultsBtn.addClass("ui fluid blue button").attr("id", "view-results-btn");
    $("#view-quiz-results-div").append(resultsBtn);
}

//When the user clicks the view results button, show match.
$("#view-results-btn").on("click", function() {
    // var matchModal = $("<div>");
    // matchModal.addClass("ui modal").attr("id", "match-results-modal");
    // var matchHeader = $("<div>");
    // matchHeader.addClass("header").text("It's a match!");
    // var matchDetails = $("<div>");
    // matchDetails.addClass("content").text("Match Details");
    // matchModal.append(matchHeader).append(matchDetails);
    // $("#main-content-section").append(matchModal);
    // $('#match-results-modal').modal('show');
    console.log("button clicked");
});

//Gender search field drop down
// $('select.dropdown') 
//   .dropdown()
// ;




