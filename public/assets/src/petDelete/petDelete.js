// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {      
       
       //Click event to remove a pet from liked pets list.
       $(".delete-pet").on("click", function(event) {
            console.log("delete button clicked");
            var id = $(this).data("id");
        
            // Send the DELETE request using ajax.
            $.ajax("/api/pets/" + id, {
            type: "DELETE",
            }).then(
            function() {
                console.log("removed pet", id);
            }
        );
    });
});