// Get the button:
let mybutton = document.getElementById("button");

// When the user scrolls down 100px from the top of the document, show the button
function scrollFunction() {
  if (window.pageYOffset > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Attach scroll event listener
window.addEventListener('scroll', scrollFunction);
