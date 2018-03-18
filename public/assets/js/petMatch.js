//Create variable to hold count that will keep track of the index of the currently displayed question.
var count = 0;

//Create variable to hold the user's choice/answer.
var userChoice;

//Create variable for choice button so that we can create it using jQuery.
var choiceBtn;

//Create variable for View Quiz Results button so that we can create it using jQuery.
var resultsBtn;

//Create an array that will hold all of the user's scores.
var scoresArray = [];

//Create variable to hold user quiz values.
var userQuizValues = [];

//Create variable to hold all questions.
//In binary, 1 is true. 0 is false.
var questionSet = {
    questionArray: [{
        question: "I would prefer a pet that is good around other animals and other people, especially children.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }, {
        question:  "I would like to have a pet that enjoys being outdoors and and that would like exercising with me.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }, {
        question: "I would like a pet that is loyal and able to be trained to protect me and my family.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }, {
        question: "I consider myself to be an affectionate, emotional person.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]

        }, {
        question: "I prefer a pet that likes to stay inside and cuddle with me.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }, {
        question: "I have a big backyard.",
        choices: ["YES", "NO"],
        values: ["1", "0"]
        }, {
        question: "What size pet are you looking for?",
        choices: ["SMALL", "MEDIUM", "LARGE"],
        values: ["0", "1", "2"]

        }, {
        question: "I don't mind a pet that is always willing to give me affection and is very energetic.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }, {
        question: "I always keep my house clean and organized.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "I would like a pet other than a cat or dog.",
        choices: ["AGREE", "DISAGREE"],
        values: ["1", "0"]
        }
    ]
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
		//Create buttons (agreeBtn).
		var choiceBtn = $("<button>");
		//Add semantic UI styling to the button to make the button look cool.
        choiceBtn.addClass("ui fluid blue button choiceBtn");
        //Give each button an id.
        choiceBtn.attr("id", "question-" + (count + 1) + "-" + questionSet.questionArray[count].values[i]);
		//Give each button a data attribute called data-value.
		choiceBtn.attr("value", questionSet.questionArray[count].values[i]);
		//Then give each choiceBtn a text equal to questionSet.questionArray[count].choices[i]
		choiceBtn.text(questionSet.questionArray[count].choices[i]);
		//Append choiceBtn to question-div so that it appears right below the question.
		$("#view-quiz-results-div").show().append(choiceBtn);
		//When user clicks the choiceBtn, push value to user's scores array and go to next question.
		$(choiceBtn).on("click", function() {
            //In binary, 1 is true. 0 is false.
            //console.log($(this).val());
            scoresArray.push($(this).val());
            console.log(scoresArray);
            //Go to the next question in the quiz.
            nextQuestion();
        });
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
    //Create a button to view the quiz results (resultsBtn).
    resultsBtn = $("<button>");
    resultsBtn.html("<h2>" +  "View results" + "</h2>");
    resultsBtn.addClass("ui fluid blue button");
    resultsBtn.attr("id", "view-results-btn");
    //Append the resultsBtn so it shows up in the HTML.
    $("#view-quiz-results-div").append(resultsBtn);
    //When the user clicks the view results button, show match.
    $("#view-results-btn").on("click", function() {
        console.log("button clicked");
        //When user submits scores...
        userQuizValues = [
            {
            question1: scoresArray[0],
            question2: scoresArray[1],
            question3: scoresArray[2],
            question4: scoresArray[3],
            question5: scoresArray[4],
            question6: scoresArray[5],
            question7: scoresArray[6],
            question8: scoresArray[7],
            question9: scoresArray[8],
            question10: scoresArray[9]
            }
        ]

        console.log(userQuizValues);
        
        //Send the POST request using ajax.
        // $.ajax("/api/new", {
        //     type: "POST",
        //     data: userQuizValues
        //     }).then(
        //     function() {
        //         console.log("posted quiz values");
        //     }
        //     );
    });
}


