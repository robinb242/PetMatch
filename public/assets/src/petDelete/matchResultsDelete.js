// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {      
       
    //Click event to remove all of the user's match results from the saved pets page and from the database.
    $("#delete-match-results").on("click", function(event) {
        console.log("delete button clicked");
        //If user confirms that they want to delete all results, remove results from database and UI.
            // Send the DELETE request using ajax.
            $.ajax("/api/matches/", {
                type: "DELETE",
                }).then(
                function() {
                    console.log("removed matches");
                    //reload page to display updated page.
                    location.reload();
                }
            );
        })
    });
