// Wrap your GSAP animations in a window.onload or a DOMContentLoaded event to ensure the elements are ready.

window.onload = function () {


    var tl = gsap.timeline();

    const navItems = document.querySelectorAll('.nav-items');



    ////////  GSAP ANIMATION FOR MAIN LANDING PAGER ////////

    navItems.forEach((item, index) => {
        // Initial state
        tl.from(item, { 
            opacity: 0, 
            y: -40,
            yoyo:true
        }, index * 0.1);
    });

    tl .from(".header-content", {
        opacity: 0
    })

    tl .from(".header-text h1", {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
    })

    tl .from(".header-text p", {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.5
    })

    tl .from(".header-text a", {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.5
    })


    ////////  GSAP ANIMATION FOR ABOUT PAGE ////////
    
    gsap.from(".image1", {
        x: -900,
        duration: 1
    })
    
    gsap.from(".image2", {
        y: 100,
        duration: 1
    })
    
    gsap.from(".image3", {
        x: 900,
        duration: 1
    })
    
    
    ////////  GSAP ANIMATION FOR ABOUT PAGE ////////

    gsap.from(".box h2", {
        y: -100,
        opacity: 0
    })

    gsap.from(".box p", {
        x: -100,
        opacity: 0
    })

    gsap.from(".see-more span", {
        x: -100,
        opacity: 0  
    })

};




