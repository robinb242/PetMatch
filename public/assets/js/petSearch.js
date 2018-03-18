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





