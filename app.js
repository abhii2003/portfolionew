let activeWindows = [];
let windowZIndex = 100;
let draggedWindow = null;
let dragOffset = { x: 0, y: 0 };
let isStartMenuOpen = false;

const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
const desktop = document.getElementById('desktop');
const desktopClock = document.getElementById('desktopClock');
const startButton = document.getElementById('startButton');
const startMenu = document.getElementById('startMenu');
const taskbarApps = document.getElementById('taskbarApps');
const taskbarClock = document.getElementById('clock');

document.addEventListener('DOMContentLoaded', function () {
    initializeCursor();
    initializeParticles();
    initializeClock();
    initializeEventListeners();
    initializeTypingAnimation();
    updateDesktopClockVisibility();

    setTimeout(() => {
        openWindow('about');
    }, 500);
});

function initializeCursor() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.style.cursor = 'default';
        if (cursor) cursor.style.display = 'none';
        if (cursorFollower) cursorFollower.style.display = 'none';
        document.body.classList.add('touch-device');
        return;
    }

    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
        if (cursorFollower) {
            cursorFollower.style.left = (e.clientX - 20) + 'px';
            cursorFollower.style.top = (e.clientY - 20) + 'px';
        }
    });

    const interactiveElements = document.querySelectorAll('button, .desktop-icon, .taskbar-app, .start-app, .project-card, .skill-item, a, .start-button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('hover');
        });
    });
}

function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

function initializeClock() {
    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        const date = now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
        if (taskbarClock) taskbarClock.textContent = `${time} • ${date}`;
        if (desktopClock) desktopClock.textContent = time;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

function updateDesktopClockVisibility() {
    if (!desktopClock) return;
    const visibleWindows = document.querySelectorAll('.window.active:not(.minimized)');
    if (visibleWindows.length === 0) {
        desktopClock.style.opacity = '1';
        desktopClock.style.visibility = 'visible';
    } else {
        desktopClock.style.opacity = '0';
        desktopClock.style.visibility = 'hidden';
    }
}

function initializeEventListeners() {
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const app = icon.getAttribute('data-app');
            const windowElement = document.getElementById(`${app}Window`);
            if (windowElement && windowElement.classList.contains('active')) {
                focusWindow(windowElement);
            } else {
                openWindow(app);
            }
        });

        icon.addEventListener('dblclick', () => {
            const app = icon.getAttribute('data-app');
            openWindow(app);
        });
    });


    if (startButton) startButton.addEventListener('click', toggleStartMenu);

    document.querySelectorAll('.start-app').forEach(app => {
        app.addEventListener('click', () => {
            const appName = app.getAttribute('data-app');
            openWindow(appName);
            closeStartMenu();
        });
    });

    document.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('.control-btn');
        if (!targetBtn) return;

        const windowElement = targetBtn.closest('.window');
        if (!windowElement) return;

        if (targetBtn.classList.contains('close-btn')) {
            closeWindow(windowElement);
        } else if (targetBtn.classList.contains('minimize-btn')) {
            minimizeWindow(windowElement);
        }
    });

    document.addEventListener('mousedown', (e) => {
        const windowHeader = e.target.closest('.window-header');
        if (windowHeader) {
            const windowElement = windowHeader.closest('.window');
            if (windowElement) {
                focusWindow(windowElement);
            }
        }
        if (isStartMenuOpen && startMenu && startButton && !startMenu.contains(e.target) && !startButton.contains(e.target)) {
            closeStartMenu();
        }
    });


    document.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            if (!e.target.closest('a')) {
                projectCard.classList.toggle('flipped');
            }
        }
    });

    initializeWindowDragging();
}

function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const texts = [
        'Web Developer',
        'Full Stack Developer',
        'React Developer',
        'UI/UX Enthusiast',
        'Next.js Developer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!typingElement) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 600;
        }

        setTimeout(typeText, typeSpeed);
    }

    typeText();
}

function getAppIconClass(appName) {
    const icons = {
        about: 'fas fa-user',
        projects: 'fas fa-folder',
        skills: 'fas fa-code',
        contact: 'fas fa-envelope',
        resume: 'fas fa-file-pdf'
    };
    return icons[appName] || 'fas fa-question-circle';
}


function openWindow(appName) {
    const window = document.getElementById(`${appName}Window`);
    if (!window) return;

    if (window.classList.contains('active') && !window.classList.contains('minimized')) {
        focusWindow(window);
        return;
    }

    if (window.classList.contains('minimized')) {
        window.classList.remove('minimized');
        window.classList.add('active');
        focusWindow(window);
        return;
    }

    if (!activeWindows.includes(appName)) {
        const offset = activeWindows.length * 30;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight - 60;

        const defaultWidth = 800;
        const defaultHeight = 600;

        const initialLeft = Math.max(50, (viewportWidth - defaultWidth) / 2 + offset);
        const initialTop = Math.max(50, (viewportHeight - defaultHeight) / 2 + offset);


        window.style.left = `${initialLeft}px`;
        window.style.top = `${initialTop}px`;
        window.style.width = '';
        window.style.height = '';
        window.classList.remove('maximized');


        activeWindows.push(appName);
        updateTaskbar();
    }
    window.classList.add('active');

    focusWindow(window);
    updateDesktopClockVisibility();
}

function closeWindow(window) {
    if (!window) return;
    const appName = window.getAttribute('data-app');

    const transitionEndHandlerName = window.getAttribute('data-minimize-handler-name');
    if (transitionEndHandlerName && window[transitionEndHandlerName]) {
        window.removeEventListener('transitionend', window[transitionEndHandlerName]);
        delete window[transitionEndHandlerName];
        window.removeAttribute('data-minimize-handler-name');
    }

    window.classList.remove('active');
    window.classList.remove('minimized');
    window.classList.remove('maximized');

    const transitionDuration = parseFloat(getComputedStyle(window).transitionDuration) * 1000;

    setTimeout(() => {
        activeWindows = activeWindows.filter(app => app !== appName);
        updateTaskbar();
        updateDesktopClockVisibility();
    }, transitionDuration || 300);
}


function minimizeWindow(window) {
    if (!window || window.classList.contains('minimized')) return;

    window.classList.remove('active');

    const handlerName = `minimizeTransitionEnd_${Date.now()}`;
    const transitionEndHandler = (e) => {
        if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
            window.classList.add('minimized');
            updateDesktopClockVisibility();
            window.removeEventListener('transitionend', window[handlerName]);
            delete window[handlerName];
            window.removeAttribute('data-minimize-handler-name');
        }
    };

    window[handlerName] = transitionEndHandler;
    window.setAttribute('data-minimize-handler-name', handlerName);

    window.addEventListener('transitionend', window[handlerName]);

    const openWindows = document.querySelectorAll('.window.active:not(.minimized)');
    if (openWindows.length > 0) {
        const topWindow = Array.from(openWindows).reduce((top, current) => {
            const currentZ = parseInt(current.style.zIndex) || 0;
            const topZ = parseInt(top.style.zIndex) || 0;
            return currentZ > topZ ? current : top;
        }, openWindows[0]);
        focusWindow(topWindow);
    } else {
        updateDesktopClockVisibility();
    }
}


function toggleMaximizeWindow(window) {
    if (!window) return;

    if (!window.classList.contains('maximized')) {
        window.setAttribute('data-prev-width', window.style.width || window.offsetWidth + 'px');
        window.setAttribute('data-prev-height', window.style.height || window.offsetHeight + 'px');
        window.setAttribute('data-prev-top', window.style.top || window.offsetTop + 'px');
        window.setAttribute('data-prev-left', window.style.left || window.offsetLeft + 'px');

        window.classList.add('maximized');
    } else {
        window.classList.remove('maximized');
        window.style.width = window.getAttribute('data-prev-width') || '';
        window.style.height = window.getAttribute('data-prev-height') || '';
        window.style.top = window.getAttribute('data-prev-top') || '';
        window.style.left = window.getAttribute('data-prev-left') || '';
    }

    window.classList.add('active');
    window.classList.remove('minimized');

    focusWindow(window);
    updateDesktopClockVisibility();
}

function focusWindow(window) {
    if (!window || window.classList.contains('minimized')) return;

    document.querySelectorAll('.taskbar-app').forEach(app => app.classList.remove('focused'));
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active-window'));

    window.style.zIndex = ++windowZIndex;

    const appName = window.getAttribute('data-app');
    const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
    if (taskbarApp) {
        taskbarApp.classList.add('focused');
    }

    updateDesktopClockVisibility();
}

function getTopWindow() {
    const visibleWindows = document.querySelectorAll('.window.active:not(.minimized)');
    if (visibleWindows.length === 0) return null;

    return Array.from(visibleWindows).reduce((top, current) => {
        const currentZ = parseInt(current.style.zIndex) || 0;
        const topZ = parseInt(top.style.zIndex) || 0;
        return currentZ > topZ ? current : top;
    }, visibleWindows[0]);
}


function initializeWindowDragging() {
    document.addEventListener('mousedown', (e) => {
        const windowHeader = e.target.closest('.window-header');
        if (windowHeader) {
            const window = windowHeader.closest('.window');
            if (!window || window.classList.contains('maximized') || e.target.closest('.window-controls')) return;

            draggedWindow = window;
            const rect = window.getBoundingClientRect();
            dragOffset.x = e.clientX - rect.left;
            dragOffset.y = e.clientY - rect.top;

            window.classList.add('is-dragging');

            document.addEventListener('mousemove', handleWindowDrag);
            document.addEventListener('mouseup', stopWindowDrag);

            focusWindow(window);
        }
    });
}

function handleWindowDrag(e) {
    if (!draggedWindow) return;

    e.preventDefault();

    const desktopRect = desktop.getBoundingClientRect();
    const windowRect = draggedWindow.getBoundingClientRect();

    let x = e.clientX - dragOffset.x;
    let y = e.clientY - dragOffset.y;

    const taskbarHeight = 60;
    x = Math.max(0, Math.min(x, desktopRect.width - windowRect.width));
    y = Math.max(0, Math.min(y, desktopRect.height - windowRect.height - taskbarHeight));

    draggedWindow.style.left = x + 'px';
    draggedWindow.style.top = y + 'px';
}

function stopWindowDrag() {
    if (draggedWindow) {
        draggedWindow.classList.remove('is-dragging');
        draggedWindow = null;
    }
    document.removeEventListener('mousemove', handleWindowDrag);
    document.removeEventListener('mouseup', stopWindowDrag);
}

function updateTaskbar() {
    if (!taskbarApps) return;
    taskbarApps.innerHTML = '';

    activeWindows.forEach(appName => {
        const app = document.createElement('div');
        app.className = 'taskbar-app';
        app.setAttribute('data-app', appName);

        const icon = document.createElement('i');
        icon.className = getAppIconClass(appName);
        app.appendChild(icon);


        const windowElement = document.getElementById(`${appName}Window`);
        if (windowElement && windowElement.classList.contains('active') && !windowElement.classList.contains('minimized')) {
            app.classList.add('open');
        }

        app.addEventListener('click', () => {
            const window = document.getElementById(`${appName}Window`);
            if (!window) return;

            if (window.classList.contains('minimized')) {
                openWindow(appName);
            } else {
                minimizeWindow(window);
            }
        });

        taskbarApps.appendChild(app);
    });

    const topWindow = getTopWindow();
    if (topWindow) {
        const appName = topWindow.getAttribute('data-app');
        const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
        if (taskbarApp) taskbarApp.classList.add('focused');
    }
}

function getAppTitle(appName) {
    const titles = {
        about: 'About Me',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        resume: 'Resume'
    };
    return titles[appName] || appName.charAt(0).toUpperCase() + appName.slice(1);
}

function toggleStartMenu() {
    if (isStartMenuOpen) {
        closeStartMenu();
    } else {
        openStartMenu();
    }
}

function openStartMenu() {
    if (!startMenu) return;
    startMenu.classList.add('active');
    isStartMenuOpen = true;
}

function closeStartMenu() {
    if (!startMenu) return;
    startMenu.classList.remove('active');
    isStartMenuOpen = false;
}

function openGithub() {
    window.open('https://github.com/abhii2003', '_blank');
}

function downloadResume() {
    const resumeUrl = 'path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Abhinav_Kushwaha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendEmail() {
    window.open('mailto:abhinavkush2003@gmail.com', '_blank');
}

document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
        const openWindows = document.querySelectorAll('.window.active:not(.minimized)');
        if (openWindows.length > 0) {
            const sortedWindows = Array.from(openWindows).sort((a, b) => (parseInt(a.style.zIndex) || 0) - (parseInt(b.style.zIndex) || 0));

            const topWindow = sortedWindows[sortedWindows.length - 1];

            const topWindowIndex = sortedWindows.indexOf(topWindow);
            const nextWindowIndex = (topWindowIndex - 1 + sortedWindows.length) % sortedWindows.length;

            const nextWindow = sortedWindows[nextWindowIndex];

            if (nextWindow) {
                focusWindow(nextWindow);
            }
        }
    }

    if (e.key === 'Escape') {
        closeStartMenu();
    }
});