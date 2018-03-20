//Pet type search field drop down
$('#pet-type-field')
  .dropdown()
;

//Gender search field drop down
$('#gender-field')
  .dropdown()
;

//Construct query URL to get pet data from petfinder API.
var queryURLBase = "http://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&animal=";
var queryURLBase2;

//Create variable to hold count that will keep track of the index of the currently displayed pet.
var searchCount = 0;

//Create variable for "New search" button so that we can create it using jQuery.
var newSearchBtn;

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
    //Form validation rules.
    //Form validation: https://semantic-ui.com/behaviors/form.html
    $('#pet-search-form')
    .form({
        fields: {
        petType: {
            identifier: 'petType',
            rules: [
            {
                type   : 'empty',
                prompt : 'Select a pet type.'
            }
            ]
        },
        breed: {
            identifier: 'breed',
            rules: [
            {
                type   : 'empty',
                prompt : 'Enter a breed.'
            }
            ]
        },
        gender: {
            identifier: 'gender',
            rules: [
            {
                type   : 'empty',
                prompt : 'Select a gender.'
            }
            ]
        },
        zipCode: {
            identifier: 'zipCode',
            rules: [
            {
                type   : 'empty',
                prompt : 'Enter your zip code.'
            }
            ]
        }
        }
    })

    //If form is valid, submit form and start search.
    if ( $('#pet-search-form').form('is valid')) {
        // form is valid 
    
        //prevent form from submitting itself.
        event.preventDefault();
        //Set search count back to 0.
        searchCount = 0;
        //Grab the user input from the form fields.
        var
            $form = $('#pet-search-form'),
            //get all values
            allFields = $form.form('get values')
        ;
            console.log(allFields);

        //Query URL construction.
        queryURLBase2 = queryURLBase + allFields.petType + "&location=" + allFields.zipCode + "&sex=" + allFields.gender + "&breed=" + allFields.breed + "&f&format=json&callback=?";
        console.log(queryURLBase2);

        //Clear search fields after user clicks search.
        $('form').form('clear')

        //Hide pet search form.
        $("#pet-search-form").hide();
        //Create "New search" button and append to search results page.
        newSearchBtn = $("<button>");
        newSearchBtn.addClass("ui pink button").text("New search");
        $("#header").append(newSearchBtn);
        //When you click the new search button, app should go display the search form again.
        $(newSearchBtn).on("click", function() {
            //Show pet search form.
            $("#pet-search-form").show();
            //Hide new search button.
            $(newSearchBtn).hide();
            //Hide pet profile card.
            $(".search-card").hide();
            //Remove pet search image, details, and buttons.
            $("#pet-search-image").hide();
            $(likeBtn).remove();
            $(dislikeBtn).remove();
            $("#pet-name").empty();
            $("#pet-age").empty();
            $("#pet-city").empty();
            $("#pet-trained").empty();
        });
        
        //show search results.
        startSearchRequest(queryURLBase2); 
    }
});

//Start search function
function startSearchRequest(queryURL) {
    //From petfinder API documentation:
    //The Petfinder API supports JSONP for cross-domain JavaScript requests. When making any request that is in JSON format, the callback parameter may be added to denote that this is a JSONP request. The value for the callback parameter should be a unique string.
    //Here the callback=? query string parameter is required to specify that it is a JSONP call. jQuery will replace the '?' within the query string with a unique time-stamped value (i.e. 'jQuery110206092635430395603_1391456463806').
    $.getJSON(queryURL, function(petData){
        //response data are now in the petData variable
        console.log(petData);
        //Example of how to retrieve a specific pet's age:
        //console.log(petData.petfinder.pets.pet[0].age.$t)

    
    //Show pet profile card and image when user clicks search.
    $(".search-card").show();
    $("#pet-search-image").show();
    //Display pet details based on the current count. Count starts at 0.
    $('#pet-search-photo').attr("src", petData.petfinder.pets.pet[searchCount].media.photos.photo[2].$t);
    $("#pet-name").append("Name: " + petData.petfinder.pets.pet[searchCount].name.$t);
    $("#pet-age").append("Age: " + petData.petfinder.pets.pet[searchCount].age.$t);
    $("#pet-city").append("Shelter: " + petData.petfinder.pets.pet[searchCount].shelterId.$t);
    $("#pet-trained").append("Description: " + petData.petfinder.pets.pet[searchCount].description.$t);
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
    if (searchCount === petData.petfinder.pets.length) {
        endSearch();
    }

    //else, if there are still pets left, go to next pet.
    else {
        startSearchRequest();
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








