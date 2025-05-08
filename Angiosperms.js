// Wait until the entire DOM is fully loaded before executing any script
$(document).ready(function () {

    // Event Listener: When a flip-card is clicked
    $(".flip-card").on("click", function (e) {
        const card = $(e.currentTarget);            // Get the card element that was clicked
        const title = card.data("title");           // Retrieve the title from data attribute
        const content = card.data("content");       // Retrieve the HTML content from data attribute

        // Inject the modal's title and content dynamically
        $("#modalTitle").text(title);               // Update modal header
        $("#modalText").html(content);              // Update modal body (supports <p> tags)

        // Display the modal popup
        $("#modal").removeClass("hidden");          // Unhide the modal

        // Reset all cards to unflipped, then flip the clicked one
        $(".flip-card").removeClass("flipped");
        card.addClass("flipped");
    });

    // Event Listener: When user clicks the modal X button
    $(".close-modal").on("click", function () {
        $("#modal").addClass("hidden");             // Hide the modal
        $(".flip-card").removeClass("flipped");     // Unflip any cards
    });

    // Event Listener: When user presses Escape key
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $("#modal").addClass("hidden");         // Hide modal if visible
            $(".flip-card").removeClass("flipped"); // Unflip any cards
        }
    });

    // Form Submission: Handle quiz answers
    $("form").on("submit", function (e) {
        e.preventDefault(); // Prevent page reload on form submission

        // Remove any previous highlights or explanations
        $(".correct-answer").removeClass("correct-answer");
        $(".explanation").remove();

        // Question 1: Fruit develops from which part?
        $("input[name='q1'][value='ovary']").parent().addClass("correct-answer");
        $("input[name='q1']").last().parent().after(
            "<div class='explanation'>The ovary develops into the fruit after fertilization in angiosperms.</div>"
        );

        // Question 2: Unique process in angiosperm reproduction?
        $("input[name='q2'][value='double']").parent().addClass("correct-answer");
        $("input[name='q2']").last().parent().after(
            "<div class='explanation'>Double fertilization is a key innovation of angiosperms.</div>"
        );

        // Question 3: Identify the angiosperms
        $("input[name='q3'][value='orchid']").parent().addClass("correct-answer");
        $("input[name='q3'][value='sunflower']").parent().addClass("correct-answer");
        $("input[name='q3']").last().parent().after(
            "<div class='explanation'>Orchids and sunflowers are angiosperms; pine is a gymnosperm.</div>"
        );

        // Question 4: Environmental role of sunflowers
        $("input[name='q4'][value='phytoremediation']").parent().addClass("correct-answer");
        $("input[name='q4']").last().parent().after(
            "<div class='explanation'>Sunflowers can clean up toxic soils through phytoremediation.</div>"
        );

        // Question 5: Function of rose hips
        $("select[name='q5']").after(
            "<div class='explanation'>Rose hips are rich in vitamin C and used in herbal remedies.</div>"
        );
    });

});
