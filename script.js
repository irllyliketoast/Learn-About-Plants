$(document).ready(function() {
    $(".plant-button").hover(
        function() {
            let plantName = $(this).data("plant"); // Get plant name
            $("#plant-info-box").text("You are about to choose: " + plantName);

            let offset = $(this).offset(); // Get button position
            let buttonWidth = $(this).outerWidth(); // Get button width
            let boxWidth = $("#plant-info-box").outerWidth(); // Get tooltip width

            $("#plant-info-box").css({
                top: offset.top + $(this).outerHeight() + 10 + "px", // Always below the button
                left: offset.left + (buttonWidth / 2) - (boxWidth / 2) + "px" // Always centered
            }).removeClass("hidden").fadeIn(200);
        },
        function() {
            $("#plant-info-box").fadeOut(200);
        }
    );
});

