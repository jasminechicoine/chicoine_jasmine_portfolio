(() => {
    const tl = gsap.timeline();

    gsap.fromTo("#prod-img-1", { x: "-100%" }, { x: "0%", duration: 0.7, scrollTrigger: {
        trigger: "#sec-1",
        start: "top center",
        end: "center center",
        scrub: true
    }});
    
    gsap.fromTo("#text-1", { x: "100%" }, { x: "0%", duration: 0.7, delay: 0, scrollTrigger: {
        trigger: "#sec-1",
        start: "top center",
        end: "center center",
        scrub: true
    }});

    gsap.fromTo("#prod-img-2", { x: "100%" }, { x: "0%", duration: 0.7, scrollTrigger: {
        trigger: "#sec-2",
        start: "top center",
        end: "center center",
        scrub: true
    }});
    
    gsap.fromTo("#text-2", { x: "-100%" }, { x: "0%", duration: 0.7, delay: 0, scrollTrigger: {
        trigger: "#sec-2",
        start: "top center",
        end: "center center",
        scrub: true
    }});

    gsap.fromTo("#prod-img-3", { x: "-100%" }, { x: "0%", duration: 0.7, scrollTrigger: {
        trigger: "#sec-3",
        start: "top center",
        end: "center center",
        scrub: true
    }});
    
    gsap.fromTo("#text-3", { x: "100%" }, { x: "0%", duration: 0.7, delay: 0, scrollTrigger: {
        trigger: "#sec-3",
        start: "top center",
        end: "center center",
        scrub: true
    }
    });
    
    gsap.from(".logo-container img", {
  x: "-100%", // Slide in from the left
  rotation: "360", // Spin effect
  duration: 2, // Animation duration
  ease: "power2.out", // Easing function
    });
    
    
    
})();