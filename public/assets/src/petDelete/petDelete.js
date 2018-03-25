// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {      
       
    //Click event to remove a pet from liked pets list.
    $(".delete-pet").on("click", function(event) {
        console.log("delete button clicked");
        var id = $(this).data("id");
        //Opens the delete pet confirmation modal.
            $('#delete-modal')
            .modal('show')
            ;

        //If user confirms that they want to delete the pet, remove pet from database and pet list.
        //Otherwise, close modal without deleteting the pet from the UI and database.
        $(".delete-pet-confirmed").on("click", function(event) {
            // Send the DELETE request using ajax.
            $.ajax("/api/pets/" + id, {
                type: "DELETE",
                }).then(
                function() {
                    console.log("removed pet", id);
                    //reload page to display updated liked pets list.
                    location.reload();
                }
            );
        })
    });
});