//Opens the about modal from the hamburger menu.
$("#about-modal-link").on("click", function() {
  $('#about-modal')
    .modal('show')
  ;
});

//Opens the contact modal from the hamburger menu.
$("#contact-modal-link").on("click", function() {
  $('#contact-modal')
    .modal('show')
  ;
});

//Opens the help modal from the hamburger menu.
$("#help-modal-link").on("click", function() {
  $('#help-modal')
    .modal('show')
  ;
});

//Opens the logout modal from the hamburger menu.
$("#logout-modal-link").on("click", function() {
  $('#logout-modal')
    .modal('show')
  ;
});

//Opens the pet description from the search results section of the saved pets page.
$(".petDescBtn").on("click", function() {
  $('#pet-desc-modal')
    .modal('show')
  ;
});

