// Get the div element
const changingDiv = document.getElementById('changingDiv');

// Array of image URLs
const backgroundImages = [
    'url("https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    // Add more image URLs as needed
];

// Function to change the background image
function changeBackground() {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    changingDiv.style.backgroundImage = randomImage;
}

// Change the background every 3 seconds (adjust the interval as needed)
setInterval(changeBackground, 3000);