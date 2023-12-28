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
  
  