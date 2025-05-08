$(document).ready(function () {
  // Track how many times user tried to click the runaway button
  let attempts = 0;
  const maxTries = 5;

  // Select key DOM elements
  const $btn = $("#runawayBtn");
  const $container = $(".quiz-game");
  const $modal = $("#thanksModal");
  const $easter = $("#mushroomModal");
  let mushroomInput = "";

  // Runaway button logic
  $btn.on("mouseenter", function () {
    attempts++;
    if (attempts >= maxTries) {
      $btn.hide();
      $modal.removeClass("hidden");
      return;
    }

    const containerWidth = $container.width() - $btn.outerWidth();
    const containerHeight = $container.height() - $btn.outerHeight();
    const randX = Math.random() * containerWidth;
    const randY = Math.random() * containerHeight;

    $btn.css({
      left: `${randX}px`,
      top: `${randY}px`
    });
  });

  // Fallback form submission
  $("form").on("submit", function (e) {
    e.preventDefault();
    $modal.removeClass("hidden");
  });

  // Easter Egg unlock via keyboard: type "mushroom"
  $(document).on("keydown", function (e) {
    if ($("#thanksModal").is(":visible")) {
      if (e.key.length === 1) {
        mushroomInput += e.key.toLowerCase();
        if (mushroomInput.includes("mushroom")) {
          mushroomInput = "";
          $modal.addClass("hidden");
          startGlitchBoot();
        }
      } else if (e.key === "Backspace") {
        mushroomInput = mushroomInput.slice(0, -1);
      }
    }
  });

  // Launch glitch boot terminal + ASCII mushroom
  function startGlitchBoot() {
    $("main").html(`
      <div id="terminal" style="
        color: lime;
        font-family: monospace;
        font-size: 1.1rem;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 30px;
        height: 600px;
        overflow: auto;
        border: 2px solid lime;
      ">
        > Initiating mushroom protocol...
      </div>
    `);

    const lines = [
      "Scanning for spores...",
      "Analyzing mycelium threads...",
      "Establishing fungal intelligence network...",
      "Injecting chloroplast packets...",
      "Warning: FernOS compromised!",
      "Hijacking root node communication...",
      "Uploading mushroom consciousness...",
      "System override detected...",
      "Releasing fungal payload...",
      "Sporeweb active. You are now connected.",
      "",
      "             ___",
      "           _/o o\\_",
      "         _/   Y   \\_",
      "        /|   '-'   |\\",
      "         |_________|",
      "          |||||||||",
      "        ~~|||||||||~~",
      "        ~~|||||||||~~",
      "        ~~~~~~~~~~~~~"
    ];

    let i = 0;
    const terminal = $("#terminal");

    const interval = setInterval(() => {
      if (i < lines.length) {
        terminal.append(`<br>> ${lines[i++]}`);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          $("#mushroomModal").removeClass("hidden");
        }, 1000);
      }
    }, 800);
  }

  // Close mushroom modal
  $(".close-mushroom").on("click", function () {
    $("#mushroomModal").addClass("hidden");
  });
});
