var tl1 = gsap.timeline()

tl1.from(".h1 h1", {
    y: -100,
})

tl1.from(".product-images img", {
    scale: 0,
    duration: 0.2,
})

tl1.from(".product-details h1", {
    y: -100,
})

tl1.from(".detail-1 p", {
    y: 50,
    opacity: 0,
})

tl1.from(".button button", {
    scale: 0,
})




var tl2 = new gsap.timeline();

tl2.from(".detail-2 p", {
    y: -50,
    scrollTrigger: {
        trigger: ".description",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    },
})

    .from(".md-headings", {
        y: -50,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
        },
    })

    .from(".product-description p", {
        y: -200,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
        },
    })

    .from(".description button", {
        scale: 0,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 20%",
            end: "top 5%",
            scrub: 1,
        },
})


var tl3 = new gsap.timeline()

tl3.from(".enquiry h1", {
    y: -150,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
})

.from(".name1", {
    x: -150,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
})

.from(".phone1", {
    x: 150,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
})

.from(".email1", {
    x: -150,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
    },
})

.from(".qua1", {
    x: 150,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
    },
})

.from(".enquiry button", {
    scale: 0,
    scrollTrigger: {
        trigger: ".enquiry",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
    },
})





var tl4 = new gsap.timeline();

tl4.from(".footwear", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".footwear",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
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
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".wooven",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});

tl4.from(".scrubber", {
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".scrubber",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
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
    scale: 0,
    duration: 0.4,
    ease: "power4.InOut",
    
    scrollTrigger: {
        trigger: ".candles",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
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

