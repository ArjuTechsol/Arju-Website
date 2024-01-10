

    
    // const navItems = document.querySelectorAll(".nav-items");
    
    // var tl = gsap.timeline();

    // navItems.forEach((item, index) => {
    //     // Initial state
    //     tl.from(item, {
    //         opacity: 0,
    //         y: -40,
    //         yoyo: true
    //     }, index * 0.1);
    // });

    gsap.from(".home ", {
        y: -40,
    })


    gsap.from(".quote-wrapper", {
        scale: 0.5,
        opacity: 0,
        scrollTrigger:{
            trigger:".quote-wrapper",
            scroller:"body",
            start: "top 70%",
            end: "top 40%",
            scrub:2,
        }
    })

    

    //////////////////  GSAP ANIMATION FOR ABOUT PAGE //////////////////
    
    gsap.from(".image1", {
        x: -900,
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
    

