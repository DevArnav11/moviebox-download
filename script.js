const exploreBtn = document.getElementById("exploreBtn");
const toast = document.getElementById("toast");

exploreBtn.addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
});

// Small playful interaction
document.querySelectorAll(".floating-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "rotate(0deg) translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      card.classList.contains("card-1")
        ? "rotate(-4deg)"
        : "rotate(4deg)";
  });
});
