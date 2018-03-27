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

var findMatchPets;

//Construct query URL to get pet data from petfinder API to return matching pets.
// var queryURL = "https://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&breed=";
// var queryURL2;

//Create variable for LIKE button so that we can create it using jQuery.
var likeBtn;

//Create variable to hold all questions.
//In binary, 1 is true. 0 is false.
var questionSet = {
    questionArray: [{
        question: "I would prefer a pet that is good around other animals and other people, especially children.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question:  "I would like to have a pet that would like exercising with me.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "I would like a pet that is loyal and able to be trained to protect me and my family.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "I consider myself to be an affectionate, emotional person.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]

        }, {
        question: "I prefer a pet that likes to stay inside and cuddle with me.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "I would prefer a pet that likes being outdoors.",
        choices: ["YES", "NO"],
        values: ["1", "0"]
        }, {
        question: "What size pet are you looking for?",
        choices: ["SMALL", "MEDIUM", "LARGE"],
        values: ["0", "1", "2"]

        }, {
        question: "I don't mind a pet that is always willing to give me affection and is very energetic.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "My house is clean.",
        choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],
        values: ["1", "2", "3", "4", "5"]
        }, {
        question: "What describes you best?",
        choices: ["Sensitive", "Tough"],
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
        $("#match-results-modal").modal('show');
        $("#match-results-modal").modal({
            closable: true
        });
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

        // $.post("/api/new", userQuizValues)
        $.post("/api/new", userQuizValues[0])
            .then(function (data) {
               
                console.log("this is your data!!!!    " + data);
                alert("Adding info...");
            });

        $.get("/api/", function (data) {
            console.log("This is your Data: " + data + "is the best match");

            if (data) {
                // $("#stats").show();
                $("#thePet").text(data);
                $("#thePet").attr("data-match", data);
                // $("#displaypic").text(data);


            }
            else {
                $("#match-results-modal").text("sorry, no match has been found, you will continue to be lonely")
            }
        });

    });
}

var userRating;
//Get user rating from match results.
$('.ui.rating')
.rating({
    initialRating: 3,
    maxRating: 5,
    onRate: function (rating) {
        console.log(rating)
        userRating = rating;
    }
});


//Click event for saving quiz results
$("#save-results").on("click", function() {

        console.log("save results button clicked");
        //Display success message to tell user results were saved successfully.
        
        var newMatch = $("#thePet").data("match");
        //Grab pet name
        //When user clicks save results, save the match results to the database.
        var newMatch = {
            pet_match: $("#thePet").data('match'),
            pet_rating: userRating,
        };
    
        //debuggging
        console.log(newMatch);
    
        // Send the POST request using ajax.
        $.ajax("/api/matches", {
            type: "POST",
            data: newMatch
        }).then(
        function() {
            console.log("added match results");
        }); 

        $.uiAlert({
            textHead: 'Results saved successfully.', // header
            text: 'Click My saved pets at the top of the page to view your results.', // Text
            bgcolor: '#C9434A', // background-color
            textcolor: '#fff', // color
            position: 'bottom-center',// position . top And bottom ||  left / center / right
            icon: 'heart', // icon in semantic-UI
            time: 3, // time
        })
   
});

//GET the user's saved quiz results from the database and display the results on the saved pets page so that the user can view the results later.
$.get("/api/matches", function(matchData) {
    console.log(matchData);
    for (var i=0; i < matchData.length; i++) {
        //Search for pets related to matching pet.
        findMatchPetsLink = $("<a>");
        findMatchPetsLink.attr("href", "petsearch");
        findMatchPets = $("<button>");
        findMatchPetsLink.append(findMatchPets);
        findMatchPets.addClass("find-matching-pets ui button").text("Find matching pets").attr("data-name", matchData[i].pet_match);
        //Create div to hold user's saved pet match results.
        var savedMatchResults = $("<div>");
        savedMatchResults.attr("id", matchData[i].pet_match + "-" + i).addClass("saved-match-results");
        $(".pet-match-results").append(savedMatchResults);
        //Add the pet match name and the user's rating to the user's saved pet match results.
        var savedPetMatchName = $("<p>");
        var savedPetMatchRating = $("<p>");
        savedPetMatchName.text("Your match: " + matchData[i].pet_match);
        savedPetMatchRating.text("Your rating: " + matchData[i].pet_rating);
        savedMatchResults.append(savedPetMatchName).append(savedPetMatchRating).append(findMatchPetsLink);
        //Click event for finding matching pets.
        // $(".find-matching-pets").on("click", function() {
        //     //Open find matching pets modal.
        //     $('#find-matching-pets-modal')
        //     .modal('show')
        //     //Query URL construction.
        //     //queryURL2 = queryURL + $(this).data("name");
        //     queryURL2 = "https://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&breed=Retriever&f&format=json";
        //     console.log(queryURL2);
        //     //show search results.
        //     findMatchingPets(queryURLBase2); 
        //     $("#matchingPet").text($(this).data("name"));
        // })
    }
});

    //Start search function
//     function findMatchingPets(queryURL2) {
//     //From petfinder API documentation:
//     //The Petfinder API supports JSONP for cross-domain JavaScript requests. When making any request that is in JSON format, the callback parameter may be added to denote that this is a JSONP request. The value for the callback parameter should be a unique string.
//     //Here the callback=? query string parameter is required to specify that it is a JSONP call. jQuery will replace the '?' within the query string with a unique time-stamped value (i.e. 'jQuery110206092635430395603_1391456463806').
//     $.getJSON(queryURL2, function(petData){
//         //response data are now in the petData variable
//         console.log(petData);
//         //Example of how to retrieve a specific pet's age:
//         //console.log(petData.petfinder.pets.pet[0].age.$t)

//         for (var i = 0; i < petData.petfinder.pets.pet.length; i++) {
//         //Create a div for each pet returned from the petfinder API.
//         var petProfile = $("<div>");
//         //Create a card for each pet returned from the petfinder API.
//         petProfile.addClass("ui card fluid search-card");
//         //Append each pet profile to the search results section of the search page.
//         $("#matching-pet-results").append(petProfile);
//         //Dynamically create like and not interested buttons at top of each pet profile card.
//         likeBtnDiv = $("<div>")
//         //Create div inside of the pet profile card to hold the buttons.
//         likeBtnDiv.addClass("extra content").attr("id", "pet-search-buttons");
//         //Create span element to hold the dislike button.
//         // dislikeBtnSpan = $("<span>");
//         // dislikeBtnSpan.addClass("left floated like").attr("id", "dislike-btn-span");
//         //Create span element to hold the like button.
//         var likeBtnSpan = $("<span>");
//         likeBtnSpan.addClass("right floated star").attr("id", "dislike-btn-span");
//         //Append the like buttons and not interested buttons to the pet profile card.
//         likeBtnDiv.append(likeBtnSpan);
//         petProfile.append(likeBtnDiv);
//        // Create buttons (likeBtn, dislikeBtn).
//         likeBtn = $("<button>");
//         // dislikeBtn = $("<button>");
//         //Add semantic UI styling to the buttons.
//         likeBtn.addClass("ui button likeBtn");
//         // dislikeBtn.addClass("ui teal button dislikeBtn")
//         //Give each button a data attribute called data-choice.
//         likeBtn.attr("data-name", petData.petfinder.pets.pet[i].name.$t).attr("data-shelter", petData.petfinder.pets.pet[i].shelterId.$t).attr("data-email", petData.petfinder.pets.pet[i].contact.email.$t);
//         //Then give each button text.
//         // dislikeBtn.html("<i class='thumbs down outline icon'>" + "</i>" + "Not interested");
//         likeBtn.html("<i class='heart outline icon'>" + "</i>" + "Like");
//         //Append likeBtn to like-btn-span so that it appears in card.
//         likeBtnSpan.append(likeBtn);
//         //Append dislikeBtn to dislike-btn-span so that it appears in card.
//         // dislikeBtnSpan.append(dislikeBtn);

//         //Create a div to hold information about each pet, such as name, age, location, and description.
//         var petDetailsDiv = $("<div>");
//         petDetailsDiv.addClass("content").attr("id", "pet-search-details-" + i);

//         //Append the pet information to the pet profile for each pet.
//         petProfile.append(petDetailsDiv);

//         //Pet description button
//         // var petDescBtn = $("<btn>");
//         // petDescBtn.addClass("ui button petDescBtn").attr("id", "pet-desc-" + i).text("More information");

//         //pet name.
//         var petName = $("<h4>")
//         petName.attr("id", "pet-name");

//         //pet age.
//         var petAge = $("<h4>");
//         petAge.attr("id", "pet-age");

//         //pet location/shelter id.
//         var petLocation = $("<h4>");
//         petLocation.attr("id", "pet-city");

//         //pet description.
//         var petDescription = $("<h4>");
//         petDescription.attr("id", "pet-trained");

//         //Shelter contact info
//         var shelterEmail = $("<h4>");
//         shelterEmail.attr("id", "shelter-email");

//         //pet photo
//         var petPhoto = $("<img>");
//         petPhoto.addClass("left floated");
//         petPhoto.attr("src", petData.petfinder.pets.pet[i].media.photos.photo[2].$t);

//         //Grab the pet name, age, location, and description data from the petfinder API.
//         petName.append(petData.petfinder.pets.pet[i].name.$t);
//         petAge.append("Age: " + petData.petfinder.pets.pet[i].age.$t);
//         petLocation.append("Shelter: " + petData.petfinder.pets.pet[i].shelterId.$t);
//         shelterEmail.append("Shelter contact information: " + petData.petfinder.pets.pet[i].contact.email.$t);
//         petDescription.append("Description: " + petData.petfinder.pets.pet[i].description.$t);
//         likeBtnDiv.append(petName);
//         petDetailsDiv.append(petAge).append(petLocation).append(shelterEmail).append(petDescription);
//         petDetailsDiv.append(petPhoto);

//         //Click event for liking a pet.
//         $(likeBtn).on("click", function() {
//             console.log("liked button clicked");
//             //Display success message when user likes a pet.
//             $.uiAlert({
//                 textHead: 'You liked ' + $(this).data('name') + ".", // header
//                 text: 'Click My saved pets at the top of the page to view your liked pets.', // Text
//                 bgcolor: '#C9434A', // background-color
//                 textcolor: '#fff', // color
//                 position: 'bottom-center',// position . top And bottom ||  left / center / right
//                 icon: 'heart', // icon in semantic-UI
//                 time: 4, // time
//                   })

//             var newLike = $(this).data("newlike");
//             //Grab pet name
//             //When user likes a pet, set liked state to true
//             var newPet = {
//                 pet_name: $(this).data('name'),
//                 pet_shelter: $(this).data('shelter'),
//                 pet_email: $(this).data('email'),
//                 liked: true
//             };

//             console.log(newPet);

//             // Send the POST request using ajax.
//             $.ajax("/api/pets", {
//                 type: "POST",
//                 data: newPet
//             }).then(
//             function() {
//                 console.log("added pet");
//                 // Reload the page to get the updated list
//                 //location.reload();
//             });
//         });

// }
// });
// }


