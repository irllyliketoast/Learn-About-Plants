// Wait for the entire DOM to be ready before running this script
$(document).ready(function () {

  // Handle flip-card clicks
  $(".flip-card").on("click", function (e) {
    const card = $(e.currentTarget);           // Get the card that was clicked
    const title = card.data("title");          // Get the plant's title from its data attribute
    const content = card.data("content");      // Get the plant's HTML content (description)

    // Inject the title and content into the modal
    $("#modalTitle").text(title);              // Set modal heading text
    $("#modalText").html(content);             // Set modal body HTML
    $("#modal").removeClass("hidden");         // Display the modal popup

    // Flip the clicked card and unflip all others
    $(".flip-card").removeClass("flipped");    
    card.addClass("flipped");
  });

  // Handle modal "X" close button
  $(".close-modal").on("click", function () {
    $("#modal").addClass("hidden");            // Hide the modal
    $(".flip-card").removeClass("flipped");    // Unflip any flipped cards
  });

  // Handle ESC key to close modal
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("#modal").addClass("hidden");          // Hide modal
      $(".flip-card").removeClass("flipped");  // Unflip all cards
    }
  });

  // Allow clicking *outside* the modal content to close the modal
  $("#modal").on("click", function (e) {
    // Only close if the user clicked on the overlay itself, not inside the content box
    if ($(e.target).is("#modal")) {
      $("#modal").addClass("hidden");          // Hide modal
      $(".flip-card").removeClass("flipped");  // Unflip cards
    }
  });

  // Handle form submission (e.g., quiz or feedback)
  $("form").on("submit", function (e) {
    e.preventDefault();                        // Prevent page refresh on submit
    alert("Thank you for your submission!");   // Show a simple confirmation alert
  });

});
