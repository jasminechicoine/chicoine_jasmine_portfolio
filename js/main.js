(() => {

    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-header nav ul li a");

    function scrollLink(e) {
    
       e.preventDefault();
       let selectedLink = e.currentTarget.hash;
       gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY: 120}})
    }

    navLinks.forEach((navLink)=>{
       navLink.addEventListener("click", scrollLink);
  })  
})();