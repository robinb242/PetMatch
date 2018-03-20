//Pet image slides on home page.
$(document).ready(function(){

    //Construct queryURL to grab pet photos from petfinder API.
    var imageQueryURL = "http://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&animal=dog&size=S&location=55337f&format=json&callback=?"

    function runPetSlides(queryURL) {

        //Get JSON data from petfinder API.
        $.getJSON(queryURL, function(petData){
            //response data are now in the petData variable
            console.log(petData);
            //Example of how to retrieve a specific pet's age:
            //console.log(petData.petfinder.pets.pet[0].age.$t)
            //Create images and divs for each pet photo in the array.
            for (var i = 0; i < petData.petfinder.pets.pet.length; i++) {
                var slideImage = $("<img>");
                var slideDiv = $("<div>");
                slideImage.attr("src", petData.petfinder.pets.pet[i].media.photos.photo[2].$t);
                slideDiv.append(slideImage);
                $(".pet-slides").append(slideDiv);        
            }
            //Initiate slick.
            $('.pet-slides').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                lazyLoad: 'progressive'
            });
        });
    }

    runPetSlides(imageQueryURL);
});
