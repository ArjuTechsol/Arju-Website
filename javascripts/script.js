
// import LocomotiveScroll from 'locomotive-scroll';



window.onload = function () {
  window.scrollTo(0, 0);


  const scroller = new LocomotiveScroll({
    el: document.querySelector('[#main]'),
    smooth: true
  });


};



// Check if the URL contains a fragment identifier
// Check if the URL contains a fragment identifier
if (window.location.hash) {
    // Smooth scroll to the element with the corresponding ID
    var targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Replace the URL without adding a new entry to the history
        history.replaceState(null, null, ' ');
    }
}

// Add an event listener to update the URL when a navigation link is clicked
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update the URL without adding a new entry to the history
            history.replaceState(null, null, ' ');
        }
    });
});
