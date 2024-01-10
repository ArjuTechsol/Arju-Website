// Wrap your GSAP animations in a window.onload or a DOMContentLoaded event to ensure the elements are ready.

window.onload = function () {

    //////////////////  GSAP ANIMATION FOR MAIN LANDING PAGER //////////////////

    var tl = gsap.timeline();

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
        duration: 0.5,
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


    //////////////////  GSAP ANIMATION FOR ABOUT PAGE //////////////////
    
    gsap.from(".image1", {
        x: -900,
        y: 100,
        duration: 1,
        scrollTrigger:{
            trigger:".image1",
            scroller:"body",
            start: "top 70%",
            end: "top 40%",
            scrub:2,
        }
    })
    
    gsap.from(".image2", {
        y: 200,
        duration: 1,
        scrollTrigger:{
            trigger:".image2",
            scroller:"body",
            start: "top 70%",
            end: "top 40%",
            scrub:1,
        }
    })
    
    gsap.from(".image3", {
        x: 900,
        duration: 1,
        scrollTrigger:{
            trigger:".image3",
            scroller:"body",
            start: "top 70%",
            end: "top 40%",
            scrub:2,
        }
    })
    
    
    //////////////////  GSAP ANIMATION FOR SERVICE PAGE //////////////////
    
    gsap.from(".box h2", {
        y: -50,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger:{
            trigger:".box h2",
            scroller:"body",
            start: "top 70%",
            end: "top 65%",
            scrub:1,
        }
    })
    
    gsap.from(".box p", {
        x: -400,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger:{
            trigger:".box p",
            scroller:"body",
            start: "top 70%",
            end: "top 65%",
            scrub:1,
        }
    })
    
    gsap.from(".see-more span", {
        opacity: 0 ,
        stagger: 0.4,
        scrollTrigger:{
            trigger:".see-more span",
            scroller:"body",
            start: "top 90%",
            end: "top 80%",
            scrub:1,
        }
    })
    
    //////////////////  GSAP ANIMATION FOR WHY US PAGE //////////////////
    
    var tl2 = gsap.timeline();
    
    tl2.from(".re1 p, .re2 p, .re3 p, .re4 p, .re5 p", {
        y: -100,
        duration: 0.3,
        ease: "power4.InOut",
        scrollTrigger:{
            trigger:".why-us-wrapper",
            scroller:"body",
            markers: true,
            start: "top 40%",
            end: "top 10%",
            scrub:1,
        }
    })

    
    
    var tl3 = gsap.timeline();
    
    tl3.from(".re1 i, .re2 i, .re3 i, .re4 i, .re5 i", {
        x: -100,
        duration: 0.3,
        ease: "power4.InOut",
        scrollTrigger:{
            trigger:".why-us-wrapper",
            scroller:"body",
            markers: true,
            start: "top 40%",
            end: "top 10%",
            scrub:1,
        }
    })
    
    
    //////////////////  GSAP ANIMATION FOR REVIEW PAGE //////////////////
    
    
    var tl4 = gsap.timeline();
    
    tl4.from(".rc1", {
        x: -500,
        duration: 0.4,
        ease: "power4.InOut"
    })
    
    tl4.from(".rc2", {
        scale: 0,
        duration: 0.4,
        ease: "power4.InOut"
    })
    
    tl4.from(".rc3", {
        x: 500,
        duration: 0.4,
        ease: "power4.InOut"
    })
    
    tl4.from(".rc4", {
        x: -500,
        duration: 0.4,
        ease: "power4.InOut"
    })
    
    tl4.from(".rc5", {
        scale: 0,
        duration: 0.4,
        ease: "power4.InOut"
    })
    
    tl4.from(".rc6", {
        x: 500,
        duration: 0.4,
        ease: "power4.InOut"
    })


    //////////////////  GSAP ANIMATION FOR QUOTE PAGE //////////////////

    gsap.from(".quote-wrapper", {
        scale: 0.5,
        opacity: 0,
        scrollTrigger:{
            trigger:".quote-wrapper",
            scroller:"body",
            start: "top 80%",
            end: "top 60%",
            scrub:2,
        }
    })

};




