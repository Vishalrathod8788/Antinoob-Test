let currentIndex = 0;
const slides = document.querySelectorAll(".slide-content");
const totalSlides = slides.length;

document.querySelector(".nav-button.left").addEventListener("click", () => {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slides[currentIndex].style.display = "block";
});

document.querySelector(".nav-button.right").addEventListener("click", () => {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.display = "block";
});

slides.forEach((slide, index) => {
  slide.style.display = index === 0 ? "block" : "none"; // Show only the first slide
});

// ___________________________________________________________________________________________________________________

let currentData = 0;
const cardsToShow = 4; // Number of cards to show at a time
const cards = document.querySelectorAll(".product-card"); // Assuming .product-card is the class for your cards

function showCards() {
  // Hide all cards
  cards.forEach((card, index) => {
    card.style.display =
      index >= currentData && index < currentData + cardsToShow
        ? "block"
        : "none";
  });
}

// Initial call to show the first set of cards
showCards();

document
  .querySelector(".products-button.right")
  .addEventListener("click", () => {
    if (currentData + cardsToShow < cards.length) {
      currentData++;
      showCards();
    }
  });

document
  .querySelector(".products-button.left")
  .addEventListener("click", () => {
    if (currentData > 0) {
      currentData--;
      showCards();
    }
  });

// ___________________________________________________________________________________________________________________

const steps = document.querySelectorAll(".step");
const images = document.querySelectorAll(".images img");

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    // Hide all images
    images.forEach((image) => {
      image.style.display = "none";
    });

    // Show the selected image
    images[index].style.display = "block";
  });
});

// ___________________________________________________________________________________________________________________

let currentIndx = 0; // Track the current index of the testimonials
const slides1 = document.querySelectorAll(".testimonial-content"); // Select all testimonial content
const totalSlides1 = slides1.length; // Get the total number of testimonials
const slidesToShow1 = 3; // Number of testimonials to show at a time

function updateTestimonials() {
  slides1.forEach((slide, index) => {
    slide.style.display =
      index >= currentIndx && index < currentIndx + slidesToShow1
        ? "block"
        : "none";
  });

  // Disable/enable buttons based on the current index
  document.querySelector(".testimonial-button.left").disabled =
    currentIndx === 0; // Disable left button if at the start
  document.querySelector(".testimonial-button.right").disabled =
    currentIndx + slidesToShow1 >= totalSlides1; // Disable right button if at the end
}

// Event listener for the left button
document
  .querySelector(".testimonial-button.left")
  .addEventListener("click", () => {
    currentIndx = Math.max(currentIndx - slidesToShow1, 0);
    updateTestimonials(); // Update the displayed testimonials
  });

// Event listener for the right button
document
  .querySelector(".testimonial-button.right")
  .addEventListener("click", () => {
    currentIndx = Math.min(
      currentIndx + slidesToShow1,
      totalSlides1 - slidesToShow1
    );
    updateTestimonials();
  });

updateTestimonials();
