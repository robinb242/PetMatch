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

//Create variable for "New search" button so that we can create it using jQuery.
var newSearchBtn;

//Create variable for LIKE button so that we can create it using jQuery.
var likeBtn;

//Create variable for DISLIKE button so that we can create it using jQuery.
var dislikeBtn;

//Hide search results until user clicks search
$(".search-card").hide();

//When search button is clicked, display search results.
$("#search-btn").on("click", function() {
    //Form validation rules.
    //All fields are required.
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
        },
        petAge: {
            identifier: 'petAge',
            rules: [
            {
                type   : 'empty',
                prompt : 'Select an age group.'
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

        //Clear previous search results from search results section (if any).
        $("#search-results").empty();

        //Grab the user input from the form fields.
        var
            $form = $('#pet-search-form'),
            //get all values from form.
            allFields = $form.form('get values')
        ;
            console.log(allFields);

        //Query URL construction.
        queryURLBase2 = queryURLBase + allFields.petType + "&location=" + allFields.zipCode + "&sex=" + allFields.gender + "&breed=" + allFields.breed + "&age=" + allFields.petAge + "&f&format=json&callback=?";
        console.log(queryURLBase2);

        //Clear search fields after user clicks search.
        $('form').form('clear')
        
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

        //Display number of matches/search results returned from petfinder API to user.
        var numberMatches = $("<h1>");
        numberMatches.attr("id", "number-matches");
        numberMatches.append("Your matches");
        $("#search-results").append(numberMatches);

        for (var i = 0; i < petData.petfinder.pets.pet.length; i++) {
        //Show pet profile card and image when user clicks search.
        $(".search-card").show();
        // $("#pet-search-image").show();
        //Create a div for each pet returned from the petfinder API.
        var petProfile = $("<div>");
        //Create a card for each pet returned from the petfinder API.
        petProfile.addClass("ui card fluid search-card");
        //Append each pet profile to the search results section of the search page.
        $("#search-results").append(petProfile);
        // likeBtnDiv = $("<div>")
        // likeBtnDiv.addClass("extra content").atrr("id", "pet-search-buttons");
        // dislikeBtnSpan = $("<span>");
        // dislikeBtnSpan.addClass("left floated like").attr("id", "dislike-btn-span");
        // var likeBtnSpan = $("<span>");
        // likeBtnSpan.addClass("right floated star").attr("id", "dislike-btn-span");
        // likeBtnDiv.append(likeBtnSpan).append(dislikeBtnSpan);
        // petProfile.append(likeBtnDiv);

        //Create a div to hold information about each pet, such as name, age, location, and description.
        var petDetailsDiv = $("<div>");
        petDetailsDiv.addClass("content").attr("id", "pet-search-details-" + i);

        //Append the pet information to the pet profile for each pet.
        petProfile.append(petDetailsDiv);

        //pet name.
        var petName = $("<h4>")
        petName.attr("id", "pet-name");

        //pet age.
        var petAge = $("<h4>");
        petAge.attr("id", "pet-age");

        //pet location/shelter id.
        var petLocation = $("<h4>");
        petLocation.attr("id", "pet-city");

        //pet description.
        var petDescription = $("<h4>");
        petDescription.attr("id", "pet-trained");

        //Shelter contact info
        var shelterEmail = $("<h4>");
        shelterEmail.attr("id", "shelter-email");

        //pet photo
        //petPhoto.attr("src", petData.petfinder.pets.pet[i].media.photos.photo[2].$t);

        //Grab the pet name, age, location, and description data from the petfinder API.
        petName.append("Name: " + petData.petfinder.pets.pet[i].name.$t);
        petAge.append("Age: " + petData.petfinder.pets.pet[i].age.$t);
        petLocation.append("Shelter: " + petData.petfinder.pets.pet[i].shelterId.$t);
        shelterEmail.append("Shelter contact information: " + petData.petfinder.pets.pet[i].contact.email.$t);
        petDescription.append("Description: " + petData.petfinder.pets.pet[i].description.$t);
        petDetailsDiv.append(petName).append(petAge).append(petLocation).append(shelterEmail).append(petDescription);

        // //Create buttons (likeBtn, dislikeBtn).
        // likeBtn = $("<button>");
        // dislikeBtn = $("<button>");
        // //Add semantic UI styling to the buttons.
        // likeBtn.addClass("ui pink button likeBtn");
        // dislikeBtn.addClass("ui teal button dislikeBtn")
        // //Give each button a data attribute called data-choice.
        // likeBtn.attr("data-choice", searchResults.searchArray[searchCount].name);
        // //Then give each button text.
        // dislikeBtn.html("<i class='thumbs down outline icon'>" + "</i>" + "Not interested");
        // likeBtn.html("<i class='heart outline icon'>" + "</i>" + "Like");
        // //Append likeBtn to like-btn-span so that it appears in card.
        // likeBtnSpan.append(likeBtn);
        // //Append dislikeBtn to dislike-btn-span so that it appears in card.
        // dislikeBtnSpan.append(dislikeBtn);
        //When user clicks the likeBtn, go to next pet in search results (if there are any left).
        // $(likeBtn).on("click", function() {
        //     nextPet();
        // });
        // //When user clicks the dislikeBtn, go to the next pet in search results (if there are any left).
        // $(dislikeBtn).on("click", function() {
        //     nextPet();
        // });
    }
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
