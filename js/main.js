(() => {

const tl = gsap.timeline();

 gsap.fromTo("#prod-img-1", { x: "-100%" }, { x: "0%", duration: 0.7 });
 gsap.fromTo("#text-1", { x: "100%" }, { x: "0%", duration: 0.7, delay: 0 });

 gsap.fromTo("#prod-img-2", { x: "100%" }, { x: "0%", duration: 0.7 });
 gsap.fromTo("#text-2", { x: "-100%" }, { x: "0%", duration: 0.7, delay: 0 });

 gsap.fromTo("#prod-img-3", { x: "-100%" }, { x: "0%", duration: 0.7 });
 gsap.fromTo("#text-3", { x: "100%" }, { x: "0%", duration: 0.7, delay: 0 });

})();