//////////////////  GSAP ANIMATION FOR LANDING PAGE //////////////////

var tl = gsap.timeline();


tl.from(".logo ", {
    opacity: 0,
    scale: 0,
    duration: 0.5
})

tl.from(".nav-bar ", {
    opacity: 0,
    duration: 0.5
})

tl.from(".home", {
    y: -50,
    duration: 0.15
})

tl.from(".about ", {
    y: -50,
    duration: 0.15
})

tl.from(".serv ", {
    y: -50,
    duration: 0.15
})

tl.from(".rev ", {
    y: -50,
    duration: 0.15
})

tl.from(".con ", {
    y: -50,
    duration: 0.15
})


/////// HEADER CONTENT ////////

tl.from(".header-content", {
    opacity: 0
})

tl.from(".header-text h1", {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    duration: 0.5,
})

tl.from(".header-text p", {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    duration: 0.5
})

tl.from(".header-text a", {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    duration: 0.5
})




//////////////////  GSAP ANIMATION FOR ABOUT PAGE //////////////////

gsap.from(".image1", {
    x: -900,
    duration: 1,
    scrollTrigger: {
        trigger: ".image1",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})

gsap.from(".image2", {
    y: 200,
    duration: 1,
    scrollTrigger: {
        trigger: ".image2",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    }
})

gsap.from(".image3", {
    x: 900,
    duration: 1,
    scrollTrigger: {
        trigger: ".image3",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})



//////////////////  GSAP ANIMATION FOR SERVICES PAGE //////////////////

gsap.from(".box h2", {
    y: -50,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".box h2",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".box p", {
    x: -400,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".box p",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".see-more span", {
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".see-more span",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 1,
    }
})




//////////////////  GSAP ANIMATION FOR QUOTE PAGE //////////////////

gsap.from(".quote-wrapper", {
    scale: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".quote-wrapper",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})
