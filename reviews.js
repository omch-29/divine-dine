const cards = document.querySelectorAll(".review-card");
let startIndex = 0;

function showReviews() {
  cards.forEach(card => card.classList.remove("active"));
  for (let i = startIndex; i < startIndex + 2; i++) {
    if (cards[i % cards.length]) {
      cards[i % cards.length].classList.add("active");
    }
  }
}

document.getElementById("next").addEventListener("click", () => {
  startIndex = (startIndex + 2) % cards.length;
  showReviews();
});

document.getElementById("prev").addEventListener("click", () => {
  startIndex = (startIndex - 2 + cards.length) % cards.length;
  showReviews();
});

// Initial load
showReviews();
