////////////////////////////////// REVIEW PAGE CODE//////////////////////////////////

// Set initial index to 0
let currentIndex = 0;

// Function to move the slide based on the given offset
function moveSlide(offset) {
    // Update currentIndex using modulo to ensure it stays within the range [0, 6]
    currentIndex = (currentIndex + offset + 7) % 7;
    // Call the function to update the slider UI
    updateSlider();
}

// Function to handle the next slide
function nextSlide() {
    // Call moveSlide with an offset of 1 to move to the next slide
    moveSlide(1);
}

// Function to handle the previous slide
function prevSlide() {
    // Call moveSlide with an offset of -1 to move to the previous slide
    moveSlide(-1);
}

// Function to update the slider UI
function updateSlider() {
    // Get the slider content element
    const sliderContent = document.querySelector(".slider-content");
    // Get the width of a review card including margin
    const cardWidth = document.querySelector(".review-card").offsetWidth + 20;

    // Update the transform property to move the slider to the current index
    sliderContent.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

