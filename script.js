
////////////////////////////////// CONTACT FORM CODE//////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const responseContainer = document.getElementById('responseContainer');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      // Simulating a successful submission without making an actual request
      // In a real scenario, you would replace this with your actual form submission logic.
      // For now, we'll just use a setTimeout to simulate an asynchronous operation.
      setTimeout(() => {
        // Clear the form fields if needed
        contactForm.reset();

        // Display a success message
        responseContainer.textContent = 'Form submitted successfully!';

        // Clear the message after 5 seconds
        setTimeout(() => {
          responseContainer.textContent = '';
        }, 5000); // 5000 milliseconds = 5 seconds
      }, 1000); // Simulating a delay of 1 second (adjust as needed)
    } catch (error) {
      console.error('Error submitting form:', error);
      responseContainer.textContent = 'Error submitting form. Please try again.';
    }
  });
});

////////////////////////////////// BACK TO TOP BUTTON CODE//////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  // Run this code when the DOM is ready

  // Get the button:
  let mybutton = document.getElementById("button");

  // initially button is set to display none
  mybutton.style.display = "none";

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  mybutton.addEventListener("click", topFunction);
});


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




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Make a GET request to the backend API endpoint
// fetch("/api/data")
//   .then((response) => response.json())
//   .then((data) => {
//     // Log the data received from the server
//     console.log(data);

//     // Update your UI or perform other actions with the data
//   })
//   .catch((error) => console.error("Error:", error));