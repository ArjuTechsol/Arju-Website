// Wrap your GSAP animations in a window.onload or a DOMContentLoaded event to ensure the elements are ready.

window.onload = function () {
    // Select all navigation items
    const navItems = document.querySelectorAll('.nav-items');

    // Create a timeline for the animation
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power2.inOut" } });

    // Loop through each navigation item and add animations
    navItems.forEach((item, index) => {
        // Initial state
        tl.from(item, { opacity: 0, y: -40 }, index * 0.1);
    });
    
    gsap.from(".nav-bar", {
        duration: 1.5,
        y: -80,
        opacity: 0,
        ease: "power2.inOut "
    })

    gsap.from(".lg-heading", {
        duration: 2,
        x: -800,
        opacity: 0,
        delay: 1.5,
        ease: "ease-out",
        
    });

    gsap.from(".header-para", {
        duration: 2,
        x: 800,
        opacity: 0,
        delay: 2,
        ease: "power2.inOut"
    });

    gsap.from(".btn-primary", {
        duration: 4,
        y: -800,
        opacity: 0,
        delay: 1.5,
        ease: "linear"
    });

    gsap.from(".header-content", {
        duration: 2,
        opacity: 0,
        delay: 1.5,
        ease: "power2.inOut "
    })
};




