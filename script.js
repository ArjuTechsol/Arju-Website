
////////////////////////////////// CONTACT FORM CODE//////////////////////////////////

//This event is fired when the initial HTML document has been completely loaded and parsed.
// document.addEventListener('DOMContentLoaded', () => {
//   //It then retrieves references to the contact form and a container element where the server response will be displayed.
//   const contactForm = document.getElementById('contactForm');
//   const responseContainer = document.getElementById('responseContainer');

//   contactForm.addEventListener('submit', async (event) => {
//     // When the form is submitted, it prevents the default form submission behavior.
//     event.preventDefault();

//     // It creates a new FormData object from the contact form, then converts it to a plain JavaScript object.
//     const formData = new FormData(contactForm);
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//       formDataObject[key] = value;
//     });

//     try {
//       //The code then uses the Fetch API to send a POST request to the server with the form data as JSON.
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formDataObject),
//       });

//       //Handling Server Response
//       const data = await response.json();
//       responseContainer.textContent = `Server Response: ${JSON.stringify(data)}`;

//       // Error Handling
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       responseContainer.textContent = 'Error submitting form. Please try again.';
//     }
//   });
// });

////////////////////////////////// CONTACT FORM NEW CODE//////////////////////////////////

// let form = document.getElementById('contactForm');

// form.addEvenetListner('submit', function(e){
//   e.preventDefault();
  
//   let formData = new FormData(e.target);
//   let formObj = Object.fromEntries(formData);
//   console.log(formObj)
// });


////////////////////////////////// BACK TO TOP BUTTON CODE//////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  // Run this code when the DOM is ready

  // Get the button:
  let mybutton = document.getElementById("button");

  // initially button is set to display none
  mybutton.style.display = "none";

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
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

// Set current index to 0
let currentIndex = 0;

// When th user clicks on nex button, this function gets called
function nextSlide() {
    currentIndex = (currentIndex + 1) % 10; // Adjust the number based on the number of cards
    updateSlider();
}

// When the user clicks on the prev button, this function gets called
function prevSlide() {
    currentIndex = (currentIndex - 1 + 10) % 10; // Adjust the number based on the number of cards
    updateSlider();
}

// Above both functions calls this function to update the slider
function updateSlider() {
    const sliderContent = document.querySelector(".slider-content");
    const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
        
    sliderContent.style.transform = `translateX(${-currentIndex * cardWidth }px)`;
       
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