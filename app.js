// Hamburger menu
const hamburger = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu on nav link click
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Typed.js animation
var typed = new Typed("#changing-element", {
    strings: ["Web Developer", "Full Stack Developer", "React Developer", "UI/UX Enthusiast", "Nextjs Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Button actions
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

// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", event => {
        event.preventDefault();
        const getID = event.currentTarget.getAttribute("href").substring(1);
        const getElement = document.getElementById(getID);
        if (getElement) {
            getElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Project hover effect
let projectItems = document.querySelectorAll(".project-item");
projectItems.forEach(projectItem => {
    let h2Element = projectItem.querySelector("h2");
    projectItem.addEventListener('mouseover', () => {
        h2Element.classList.add("heading-hover");
    });
    projectItem.addEventListener('mouseout', () => {
        h2Element.classList.remove("heading-hover");
    });
});

// Responsive sidebar
function updateFixedElementPosition() {
    const fixedElement = document.getElementById('media-links');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if ((viewportHeight < 675) && (viewportWidth < 440)) {
        document.getElementById("about").style.marginTop = "20rem";
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

// Loading screen fade-out
window.onload = function () {
    document.getElementById("loading").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 600);
};

// Custom cursor logic
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = (e.clientX - 10) + 'px';
    follower.style.top = (e.clientY - 10) + 'px';
});
// Cursor hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Particles background
function createParticles(num) {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < num; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        particlesContainer.appendChild(particle);
    }
}
createParticles(60);

// Animate on scroll (fade-in, slide-in)
function revealOnScroll() {
    const fadeIns = document.querySelectorAll('.fade-in');
    const slideLefts = document.querySelectorAll('.slide-in-left');
    const slideRights = document.querySelectorAll('.slide-in-right');
    const reveal = (elements) => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    };
    reveal(fadeIns);
    reveal(slideLefts);
    reveal(slideRights);
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
