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
    //Create a button (resultsBtn).
    resultsBtn = $("<button>");
    resultsBtn.html("<h2>" +  "View results" + "</h2>");
    resultsBtn.addClass("ui fluid blue button");
    resultsBtn.attr("id", "view-results-btn");
    $("#view-quiz-results-div").append(resultsBtn);
    //When the user clicks the view results button, show match.
    $("#view-results-btn").on("click", function() {
        console.log("button clicked");
        //When user submits scores...
        userQuizValues = 
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

//Gender search field drop down
// $('select.dropdown') 
//   .dropdown()
// ;

//Create variable to hold count that will keep track of the index of the currently displayed pet.
var searchCount = 0;

//Create variable to hold the user's choice/answer.
//var userChoice;

//Create variable for LIKE button so that we can create it using jQuery.
var likeBtn;

//Create variable for DISLIKE button so that we can create it using jQuery.
var dislikeBtn;

//Create variable to hold all search results.
var searchResults = {
    searchArray: [{
        name: "Sparky",
        age: 2,
        city: "Lakeville",
        trained: "Yes",
        img: "http://photos.petfinder.com/photos/pets/40945352/2/?bust=1518568112&width=300&-pn.jpg"
        }, {
        name: "Friday",
        age: 4,
        city: "Burnsville",
        trained: "Yes",
        img:"http://photos.petfinder.com/photos/pets/41070765/3/?bust=1519863195&width=500&-x.jpg"
        }, {
        name: "Millie",
        age: 5,
        city: "Minneapolis",
        trained: "No",
        img:"http://photos.petfinder.com/photos/pets/40584159/1/?bust=1515099831&width=300&-pn.jpg"
        }, {
        name: "Prince",
        age: 7,
        city: "St. Paul",
        trained: "No",
        img:"http://photos.petfinder.com/photos/pets/41194913/2/?bust=1521230864&width=300&-pn.jpg"
        }]
};

//Hide search results until user clicks search
$(".search-card").hide();

//Hide end-pet-search div.
$("#end-pet-search").hide();

//When search button is clicked, display search results.
$("#search-btn").on("click", function() {
    //prevent form from submitting itself.
    event.preventDefault();
    //Set search count back to 0.
    searchCount = 0;
    //show search results.
	startSearch();
});

//Start search function
function startSearch() {
    //Show search card when user clicks search.
    $(".search-card").show();
    //Display pet details based on the current count. Count starts at 0.
    $('#pet-search-photo').attr("src", searchResults.searchArray[searchCount].img);
    $("#pet-name").append("Name: " + searchResults.searchArray[searchCount].name);
    $("#pet-age").append("Age: " + searchResults.searchArray[searchCount].age);
    $("#pet-city").append("Location: " + searchResults.searchArray[searchCount].city);
    $("#pet-trained").append("House Trained: " + searchResults.searchArray[searchCount].trained);
    //Create buttons (likeBtn, dislikeBtn).
    likeBtn = $("<button>");
    dislikeBtn = $("<button>");
    //Add semantic UI styling to the buttons.
    likeBtn.addClass("ui pink button likeBtn");
    dislikeBtn.addClass("ui teal button dislikeBtn")
    //Give each button a data attribute called data-choice.
    likeBtn.attr("data-choice", searchResults.searchArray[searchCount].name);
    //Then give each button text.
    dislikeBtn.html("<i class='thumbs down outline icon'>" + "</i>" + "Not interested");
    likeBtn.html("<i class='heart outline icon'>" + "</i>" + "Like");
    //Append likeBtn to like-btn-span so that it appears in card.
    $("#like-btn-span").append(likeBtn);
    //Append dislikeBtn to dislike-btn-span so that it appears in card.
    $("#dislike-btn-span").append(dislikeBtn);
    //When user clicks the likeBtn, go to next pet in search results (if there are any left).
    $(likeBtn).on("click", function() {
        nextPet();
    });
    //When user clicks the dislikeBtn, go to the next pet in search results (if there are any left).
    $(dislikeBtn).on("click", function() {
        nextPet();
    });
}

//When user clicks Like button, go to the next pet.
function nextPet() {
	//Increment the search count by 1
    searchCount++
    //Remove previous pet from HTML before going onto the next pet in the search results.
    $(".search-card").hide();
    //Remove buttons from previous pet from HTML.
    $("#like-btn-span").empty();
    $("#dislike-btn-span").empty();
    //Remove pet search details from previous pet from HTML.
    $("#pet-name").empty();
    $("#pet-age").empty();
    $("#pet-trained").empty();
    $("#pet-city").empty();
    //If user reaches the max number of search results available, tell user no more available pets.
    if (searchCount === searchResults.searchArray.length) {
        endSearch();
    }

    //else, if there are still pets left, go to next pet.
    else {
        startSearch();
    }
}

//If there are no more available pets for the current search, end search.
function endSearch() {
    //Show search card.
    $(".search-card").show();
    //Remove pet search image, details, and buttons.
    $("#pet-search-image").hide();
    $("#pet-search-buttons").hide();
    $("#pet-search-details").hide();
    //Tell user there are no more pets for this search.
    $("#end-pet-search").show();
}






