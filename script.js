

const links = document.querySelectorAll(".nav-link a");
const sections = document.querySelectorAll(".sections section");


links.forEach(link =>{

    link.addEventListener("click", function () {

        /* Remove all active links */
        links.forEach(item => {
            item.classList.remove("active");
        });


        /* Add active class */
        this.classList.add("active");


        /* Get target section */
        const targetId = this.getAttribute("href");


        /* Hide all sections */
        sections.forEach(section => {

            section.style.display = "none";

        });


        /* Show selected section */
        const targetSection = document.querySelector(targetId);

        targetSection.style.display = "flex";


        /* Animation restart */
        targetSection.style.animation = "none";

        targetSection.offsetHeight;

        targetSection.style.animation =
            "sectionAnimation 0.6s ease forwards";

    });

});


/* Default Home Active */

document.querySelector('.nav-link a[href="#home"]')
    .classList.add("active");


sections.forEach(section => {

    if (section.id !== "home") {

        section.style.display = "none";

    }

});