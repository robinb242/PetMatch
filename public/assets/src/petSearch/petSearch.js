//Construct query URL to get pet data from petfinder API.
var queryURLBase = "https://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&animal=";
var queryURLBase2;

//Create variable for LIKE button so that we can create it using jQuery.
var likeBtn;

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

            //Replace all spaces in the breed name with a plus (+) sign.
            //https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
            var petBreed = allFields.breed;
            var replacedBreed = petBreed.split(' ').join('+');
            console.log(replacedBreed);



        //Query URL construction.
        queryURLBase2 = queryURLBase + allFields.petType + "&location=" + allFields.zipCode + "&sex=" + allFields.gender + "&breed=" + replacedBreed + "&age=" + allFields.petAge + "&f&format=json&callback=?";
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
        //Dynamically create like and not interested buttons at top of each pet profile card.
        likeBtnDiv = $("<div>")
        //Create div inside of the pet profile card to hold the buttons.
        likeBtnDiv.addClass("extra content").attr("id", "pet-search-buttons");
        //Create span element to hold the dislike button.
        // dislikeBtnSpan = $("<span>");
        // dislikeBtnSpan.addClass("left floated like").attr("id", "dislike-btn-span");
        //Create span element to hold the like button.
        var likeBtnSpan = $("<span>");
        likeBtnSpan.addClass("right floated star").attr("id", "dislike-btn-span");
        //Append the like buttons and not interested buttons to the pet profile card.
        likeBtnDiv.append(likeBtnSpan);
        petProfile.append(likeBtnDiv);
       // Create buttons (likeBtn, dislikeBtn).
        likeBtn = $("<button>");
        // dislikeBtn = $("<button>");
        //Add semantic UI styling to the buttons.
        likeBtn.addClass("ui button likeBtn");
        // dislikeBtn.addClass("ui teal button dislikeBtn")
        //Give each button a data attribute called data-choice.
        likeBtn.attr("data-name", petData.petfinder.pets.pet[i].name.$t).attr("data-shelter", petData.petfinder.pets.pet[i].shelterId.$t).attr("data-email", petData.petfinder.pets.pet[i].contact.email.$t).attr("data-photo", petData.petfinder.pets.pet[i].media.photos.photo[2].$t) ;
        //Then give each button text.
        // dislikeBtn.html("<i class='thumbs down outline icon'>" + "</i>" + "Not interested");
        likeBtn.html("<i class='heart outline icon'>" + "</i>" + "Like");
        //Append likeBtn to like-btn-span so that it appears in card.
        likeBtnSpan.append(likeBtn);
        //Append dislikeBtn to dislike-btn-span so that it appears in card.
        // dislikeBtnSpan.append(dislikeBtn);

        //Create a div to hold information about each pet, such as name, age, location, and description.
        var petDetailsDiv = $("<div>");
        petDetailsDiv.addClass("content").attr("id", "pet-search-details-" + i);

        //Append the pet information to the pet profile for each pet.
        petProfile.append(petDetailsDiv);

        //Pet description button
        // var petDescBtn = $("<btn>");
        // petDescBtn.addClass("ui button petDescBtn").attr("id", "pet-desc-" + i).text("More information");

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
        var petPhoto = $("<img>");
        petPhoto.addClass("left floated");
        petPhoto.attr("src", petData.petfinder.pets.pet[i].media.photos.photo[2].$t);

        //Grab the pet name, age, location, and description data from the petfinder API.
        petName.append(petData.petfinder.pets.pet[i].name.$t);
        petAge.append("Age: " + petData.petfinder.pets.pet[i].age.$t);
        petLocation.append("Shelter: " + petData.petfinder.pets.pet[i].shelterId.$t);
        shelterEmail.append("Shelter contact information: " + petData.petfinder.pets.pet[i].contact.email.$t);
        petDescription.append("Description: " + petData.petfinder.pets.pet[i].description.$t);
        likeBtnDiv.append(petName);
        petDetailsDiv.append(petAge).append(petLocation).append(shelterEmail).append(petDescription);
        petDetailsDiv.append(petPhoto);

        //Click event for liking a pet.
        $(likeBtn).on("click", function() {
            console.log("liked button clicked");
            //Display success message when user likes a pet.
            $.uiAlert({
                textHead: 'You liked ' + $(this).data('name') + ".", // header
                text: 'Click My saved pets at the top of the page to view your liked pets.', // Text
                bgcolor: '#C9434A', // background-color
                textcolor: '#fff', // color
                position: 'bottom-center',// position . top And bottom ||  left / center / right
                icon: 'heart', // icon in semantic-UI
                time: 3, // time
                  })

            var newLike = $(this).data("newlike");
            //Grab pet name
            //When user likes a pet, set liked state to true
            var newPet = {
                pet_name: $(this).data('name'),
                pet_shelter: $(this).data('shelter'),
                pet_email: $(this).data('email'),
                liked: true,
                pet_photo:  $(this).data('photo')
            };

            console.log(newPet);

            // Send the POST request using ajax.
            $.ajax("/api/pets", {
                type: "POST",
                data: newPet
            }).then(
            function() {
                console.log("added pet");
                // Reload the page to get the updated list
                //location.reload();
            });
        });

 
    }
});
}


