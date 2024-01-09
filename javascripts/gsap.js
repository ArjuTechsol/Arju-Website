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
        duration: 1,
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
        opacity: 0 ,
    })


    var tl2 = gsap.timeline();

    tl2.from(".re1 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl2.from(".re2 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl2.from(".re3 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl2.from(".re4 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl2.from(".re5 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })


    var tl3 = gsap.timeline();

    tl3.from(".re1 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl3.from(".re2 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl3.from(".re3 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl3.from(".re4 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })

    tl3.from(".re5 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut"
    })


    var tl4 = gsap.timeline();

    tl4.from(".rc1", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

    tl4.from(".rc2", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

    tl4.from(".rc3", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

    tl4.from(".rc4", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

    tl4.from(".rc5", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

    tl4.from(".rc6", {
        x: -9000,
        duration: 0.4,
        ease: "power4.InOut"
    })

};




