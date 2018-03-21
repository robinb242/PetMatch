var apiKey = "a6ed6e743e4fa4680e6f9fa2eff10f78";

//API Secret
var apiID = "0f67d952d0669688d08fcd33a5b57fd5";

var searchPet = "";

var URLcallString - "http://api.petfinder.com/my.method"

var GetCallString = "http://api.petfinder.com/my.method?key=12345&arg1=foo" + apiID + "&_app_key=" + apiKey + "&q=" + searchDish;

URLs are of the form: http://api.petfinder.com/subsystem.method

For GET calls, all arguments are specified in the URL query string like this: http://api.petfinder.com/my.method?key=12345&arg1=foo

For POST, PUT and DELETE calls, all arguments should be specified in the request body, so the URL would be http://api.petfinder.com/my.method while the request body would contain key=12345&arg1=foo
//General API Search
//----------------------------------------------------------------------
var createRow = function(data) {
      // Get reference to existing tbody element, create a new table row element
      var tBody = $("tbody");
      var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var petName = $("<#pet-name").text(response.Name);
      var petAge = $("#pet-age").text(response.Age);
      var petCity = $("#pet-city").text(response.City);
      var petTrained = $("#pet-trained").text(response.Trained);

      // Append the newly created table data to the table row
      tRow.append(petName, petAge, petCity, petTrained);
      // Append the table row to the table body
      tBody.append(tRow);
    }
    // // to search PetFinder API for the animal match from sql database.
    var matchSearchPetFinderAPI = function(petQuery) {
      var queryURL = "http://api.petfinder.com/my.method?key=" + apiKey "&animal=" + resultsBtn.animal + "&location=" + user_zip "&format=json";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        createRow(response)
      });
    }
    //http://api.petfinder.com/pet.find?key=98d54d4a2d02242de8d84d2171223995&animal=dog&size=S&location=55337f&format=json


  var searchPetFinderAPI = function(petQuery) {

      var queryURL = "http://api.petfinder.com/my.method?key=" + apiKey + "&animal=" + pet-name + "&age=" + pet-age + "&location=" + pet-city + "&sex=" + pet-sex+ "&format=json";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        createRow(response)
      });
    }
    
 
   
