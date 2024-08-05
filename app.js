const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var typed = new Typed("#changing-element", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

function opneGithubProfile() {
    let githubProfile = "https://github.com/abhii2003";

    window.open(githubProfile, "_blank");
}
function mailTo() {
    let mailTo = "mailto:abhinavkush2003@gmail.com";

    window.open(mailTo, "_blank");
}
function downloadFile() {
    const link = document.createElement('a');
    link.href = './resume-abhi.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
    navLink.addEventListener("click", event => {
        event.preventDefault();

        const getID = event.currentTarget.getAttribute("href").substring(1);
        const getElement = document.getElementById(getID);

        getElement.scrollIntoView({
            behavior: 'smooth'
        })
    })
});


let projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(projectItem => {
    let childElements = projectItem.children;
    let h2Element = childElements[1];

    projectItem.addEventListener('mouseover', event => {
        h2Element.classList.add("heading-hover");
    })
    projectItem.addEventListener('mouseout', event => {
        h2Element.classList.remove("heading-hover");
    })
});

function updateFixedElementPosition() {
    const fixedElement = document.getElementById('media-links');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if ((viewportHeight < 675) && (viewportWidth < 440)) {
        document.getElementById("about").style.marginTop = "20rem"

    }
    else if (viewportHeight < 560) {
        document.getElementById("about").style.marginTop = "20rem";
    }
    else if (viewportHeight < 460) {
        document.getElementById("about").style.marginTop = "20rem";
        document.getElementById("about").style.height = "fit-content";
        document.getElementById("footer").style.marginTop = "20rem";
    }
    else {
        document.getElementById("about").style.marginTop = "5rem";
        document.getElementById("footer").style.marginTop = "10rem";
    }

    if (viewportWidth < 769) {
        fixedElement.style.position = 'relative';
        fixedElement.style.bottom = '80px';
        fixedElement.style.left = '0px';
        fixedElement.style.marginInline = 'auto';
        fixedElement.style.marginBottom = '2rem';
        fixedElement.children[0].style.flexDirection = "row";
        document.getElementById('footer').appendChild(fixedElement);

    } else {
        fixedElement.style.position = 'fixed';
        fixedElement.style.bottom = '0';
        fixedElement.style.left = '50px';
        fixedElement.style.marginBottom = '0';

        fixedElement.children[0].style.flexDirection = "column";
        document.body.appendChild(fixedElement);
    }
}

updateFixedElementPosition();

window.addEventListener('resize', updateFixedElementPosition);