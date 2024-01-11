//////////////////  GSAP ANIMATION FOR LANDING PAGE //////////////////

var tl = gsap.timeline();


tl.from(".navbar .logo", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
});

tl.from(".navbar .nav-items", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
});

tl.from(".navbar .account", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
});

var tl2 = gsap.timeline();

tl2.from(".header-content h1", {
    y: -200,
    duration: 0.5,
})

tl2.from(".header-content p", {
    y: 200,
    duration: 0.5,
})

tl2.from(".header-content .wrapper", {
    scale: 0,
    duration: 0.5,
})




//////////////////  GSAP ANIMATION FOR PRODUCTS PAGE //////////////////


var tl4 = gsap.timeline();

tl4.from(".footwear", {
    x: -500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".footwear",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});

tl4.from(".tshirt", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".tshirt",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});

tl4.from(".wooven", {
    x: 500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".wooven",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});

tl4.from(".scrubber", {
    x: -500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".scrubber",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});

tl4.from(".papercup", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".papercup",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});

tl4.from(".candles", {
    x: 500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".candles",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});

tl4.from(".floating", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".floating",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});



//////////////////  GSAP ANIMATION FOR OFFER PAGE //////////////////



var tl = gsap.timeline();


tl4.from(".offer-image", {
    y: 500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".limited-time",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});

tl4.from(".offer-content1 p, .offer-content1 h2, .offer-content1 h3", {
    x: -500,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".limited-time",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    },
});



//////////////////  GSAP ANIMATION FOR INFO PAGE //////////////////

var tl5 = gsap.timeline();


tl5.from(".info-section img", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".info",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    },
});


tl5.from(".info-section p", {
    y: 500,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".info",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    },
});


tl5.from(".info-section h3", {
    x: 500,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".info",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    },
});