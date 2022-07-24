const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");

    //Toggle Nav//
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });

    //Animate Links//
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        console.log(index / 5);
    })
}

navSlide();