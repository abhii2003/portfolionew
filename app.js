document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu
    const hamburger = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", mobileMenu);
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
    }

    // Close menu on nav link click
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    function closeMenu() {
        if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }

    // Typed.js animation
    if (document.getElementById("changing-element")) {
        var typed = new Typed("#changing-element", {
            strings: ["Web Developer", "Full Stack Developer", "React Developer", "UI/UX Enthusiast", "Nextjs Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });
    }

    // Button actions
    window.opneGithubProfile = function () {
        let githubProfile = "https://github.com/abhii2003";
        window.open(githubProfile, "_blank");
    }
    window.mailTo = function () {
        let mailTo = "mailto:abhinavkush2003@gmail.com";
        window.open(mailTo, "_blank");
    }
    window.downloadFile = function () {
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
        if (h2Element) {
            projectItem.addEventListener('mouseover', () => {
                h2Element.classList.add("heading-hover");
            });
            projectItem.addEventListener('mouseout', () => {
                h2Element.classList.remove("heading-hover");
            });
        }
    });

    // Responsive sidebar
    function updateFixedElementPosition() {
        const fixedElement = document.getElementById('media-links');
        const about = document.getElementById('about');
        const footer = document.getElementById('footer');
        if (!fixedElement || !about || !footer) return;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        if ((viewportHeight < 675) && (viewportWidth < 440)) {
            about.style.marginTop = "20rem";
        }
        else if (viewportHeight < 560) {
            about.style.marginTop = "20rem";
        }
        else if (viewportHeight < 460) {
            about.style.marginTop = "20rem";
            about.style.height = "fit-content";
            footer.style.marginTop = "20rem";
        }
        else {
            about.style.marginTop = "5rem";
            footer.style.marginTop = "10rem";
        }
        if (viewportWidth < 769) {
            fixedElement.style.position = 'relative';
            fixedElement.style.bottom = '80px';
            fixedElement.style.left = '0px';
            fixedElement.style.marginInline = 'auto';
            fixedElement.style.marginBottom = '2rem';
            if (fixedElement.children[0]) {
                fixedElement.children[0].style.flexDirection = "row";
            }
            footer.appendChild(fixedElement);
        } else {
            fixedElement.style.position = 'fixed';
            fixedElement.style.bottom = '0';
            fixedElement.style.left = '50px';
            fixedElement.style.marginBottom = '0';
            if (fixedElement.children[0]) {
                fixedElement.children[0].style.flexDirection = "column";
            }
            document.body.appendChild(fixedElement);
        }
    }
    updateFixedElementPosition();
    window.addEventListener('resize', updateFixedElementPosition);

    // Loading screen fade-out
    const loading = document.getElementById("loading");
    if (loading) {
        window.onload = function () {
            loading.classList.add("fade-out");
            setTimeout(() => {
                loading.style.display = "none";
            }, 600);
        };
    }

    // Custom cursor logic
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (cursor && follower) {
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
    }

    // Particles background
    function createParticles(num) {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
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

    // Modified flip card logic for app.js
    // Add this to your existing JavaScript file, replacing the current flip card code

    // Flip card on tap/click for mobile and on focus for accessibility
    document.querySelectorAll('.flip-card').forEach(card => {
        // Remove automatic hover flip by adding this class to all cards
        card.classList.add('click-to-flip');

        // Flip on click (for all devices)
        card.addEventListener('click', function (e) {
            // Only flip if not clicking a link inside the card
            if (!e.target.closest('a')) {
                e.preventDefault();
                // Toggle flipped class
                this.classList.toggle('flipped');

                // If this card is flipped, unflip all other cards
                if (this.classList.contains('flipped')) {
                    document.querySelectorAll('.flip-card').forEach(otherCard => {
                        if (otherCard !== this) {
                            otherCard.classList.remove('flipped');
                        }
                    });
                }
            }
        });

        // Flip on Enter/Space for keyboard users
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');

                // If this card is flipped, unflip all other cards
                if (this.classList.contains('flipped')) {
                    document.querySelectorAll('.flip-card').forEach(otherCard => {
                        if (otherCard !== this) {
                            otherCard.classList.remove('flipped');
                        }
                    });
                }
            }
        });

        // 3D tilt effect (preserved from original code)
        card.addEventListener('mousemove', e => {
            const inner = card.querySelector('.flip-card-inner');
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            inner.style.transform =
                `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.flip-card-inner');
            // Only reset transform if not flipped
            if (inner && !card.classList.contains('flipped')) {
                inner.style.transform = '';
            }
        });

        //Close on click outside
        document.addEventListener('click', function (e) {
            if (!card.contains(e.target) && card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            }
        });
    });

});
