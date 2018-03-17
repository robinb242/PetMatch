ar apiKey = "a6ed6e743e4fa4680e6f9fa2eff10f78";

//API Secret
var apiID = "0f67d952d0669688d08fcd33a5b57fd5";

var searchPet = "";

var URLcallString - "http://api.petfinder.com/my.method"

var GetCallString = "http://api.petfinder.com/my.method?key=12345&arg1=foo" + apiID + "&_app_key=" + apiKey + "&q=" + searchDish;

URLs are of the form: http://api.petfinder.com/subsystem.method

For GET calls, all arguments are specified in the URL query string like this: http://api.petfinder.com/my.method?key=12345&arg1=foo

For POST, PUT and DELETE calls, all arguments should be specified in the request body, so the URL would be http://api.petfinder.com/my.method while the request body would contain key=12345&arg1=foo