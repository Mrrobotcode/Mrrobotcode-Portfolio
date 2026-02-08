const techIcons = [
    'fab fa-js-square', 'fab fa-react', 'fab fa-node-js', 'fab fa-python',
    'fab fa-vuejs', 'fab fa-docker', 'fab fa-git-alt', 'fab fa-html5',
    'fab fa-css3-alt', 'fab fa-npm', 'fab fa-github', 'fab fa-angular',
    'fab fa-sass', 'fab fa-aws', 'fab fa-linux', 'devicon-csharp-plain', 
    'fa-brands fa-figma', 'devicon-azuresqldatabase-plain', 
    'devicon-express-original', 'devicon-astro-plain'
];

let terminalTimeout = null;

const translations = {
    es: {
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navSkills: "Habilidades",
        navContact: "Contacto",

        themeLight: "Claro",
        themeDark: "Oscuro",
        themeSystem: "Sistema",

        langSpanish: "Español",
        langEnglish: "English",

        heroTag: "Backend",
        heroTitle: "Hey, soy mrrobotcode",
        heroDescription: "Desarrollador de <strong>República Dominicana</strong> especializado en crear <strong>soluciones innovadoras</strong> con tecnologías modernas.",
        heroBadge: "Disponible para trabajar",
        heroButton: "Descargar CV",

        terminalTitle: "Windows PowerShell",
        terminalLine1: "Microsoft Windows [Version 10.0.19044.1234]",
        terminalLine2: "(c) Microsoft Corporation. All rights reserved.",
        terminalCommand: "sobre_mi.exe",

        aboutText1: "Me llamo José Mercedes, tengo 18 años, soy un chico sencillo, lleno de apiraciones por cumplir y con muchas ganas de aprender y crecer tanto como persona y desarrollador.",
        aboutText2: "Me ha encantado la programacion desde pequeño, y desde entonces he estado anelando en convertirme en un gran desarrollador, y aunque aun me falta mucho por aprender, cada dia me esfuerzo por mejorar mis habilidades y conocimientos.",
        aboutText3: "Me considero una persona autodidacta y mi objetivo es seguir desarrollando proyectos innovadores que puedan tener un impacto en donde me encuentre.",

        projectsTitle: "Proyectos",
        projectsSubtitle: "Trabajos recientes",
        project1Title: "Sistema de Farmacia",
        project1Desc: "Modulos de Ventas, Facturacion e Inventario y automatiza los reportes.",
        project2Title: "App Web de Baberia",
        project2Desc: "Automatiza las reservas, un dashboard con reportes y valoraciones.",
        project3Title: "Remove Background App",
        project3Desc: "Elimina el fondo de imágenes, utilizando la API de Removebg.",

        skillsTitle: "Habilidades",
        skillsSubtitle: "Tecnologías con las que trabajo",

        contactTitle: "Contacto",
        contactSubtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
        contactIntro: "Hablemos sobre cómo puedo ayudarte a hacerlo realidad.",
        contactName: "Nombre",
        contactEmail: "Email",
        contactSubject: "Asunto",
        contactMessage: "Mensaje",
        contactNamePlaceholder: "Tu nombre",
        contactEmailPlaceholder: "tu@email.com",
        contactSubjectPlaceholder: "¿De que quieres hablar?",
        contactMessagePlaceholder: "Cuéntame sobre tu proyecto",
        contactButton: "Enviar Mensaje",
        contactSuccess: "¡Mensaje enviado exitosamente!",
        contactError: "Hubo un error al enviar el mensaje.",

        footerText: "Inspired by"
    },

    en: {
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",

        themeLight: "Light",
        themeDark: "Dark",
        themeSystem: "System",

        langSpanish: "Español",
        langEnglish: "English",

        heroTag: "Backend",
        heroTitle: "Hey, I'm mrrobotcode",
        heroDescription: "Developer from <strong>Dominican Republic</strong> specialized in creating <strong>innovative solutions</strong> with modern technologies.",
        heroBadge: "Available for work",
        heroButton: "Download CV",

        terminalTitle: "Windows PowerShell",
        terminalLine1: "Microsoft Windows [Version 10.0.19044.1234]",
        terminalLine2: "(c) Microsoft Corporation. All rights reserved.",
        terminalCommand: "about_me.exe",

        aboutText1: "My name is José Mercedes, I'm 18 years old, I'm a simple guy, full of aspirations to fulfill and eager to learn and grow both as a person and as a developer.",
        aboutText2: "I've loved programming since I was a kid, and since then I've been longing to become a great developer, and although I still have a lot to learn, every day I strive to improve my skills and knowledge.",
        aboutText3: "I consider myself a self-taught person and my goal is to continue developing innovative projects that can have an impact wherever I find myself.",

        projectsTitle: "Projects",
        projectsSubtitle: "Recent work",
        project1Title: "Pharmacy System",
        project1Desc: "Sales, Billing and Inventory modules and automates reports.",
        project2Title: "Barbershop Web App",
        project2Desc: "Automates reservations, a dashboard with reports and ratings.",
        project3Title: "Remove Background App",
        project3Desc: "Removes background from images using the Removebg API.",

        skillsTitle: "Skills",
        skillsSubtitle: "Technologies I work with",

        contactTitle: "Contact",
        contactSubtitle: "Do you have a project in mind? Let's talk!",
        contactIntro: "Let's talk about how I can help you make it happen.",
        contactName: "Name",
        contactEmail: "Email",
        contactSubject: "Subject",
        contactMessage: "Message",
        contactNamePlaceholder: "Your name",
        contactEmailPlaceholder: "your@email.com",
        contactSubjectPlaceholder: "What do you want to talk about?",
        contactMessagePlaceholder: "Tell me about your project",
        contactButton: "Send Message",
        contactSuccess: "Message sent successfully!",
        contactError: "There was an error sending the message.",

        footerText: "Inspired by"
    }
};

function createStaticBackground() {
    const bg = document.getElementById('animatedBg');
    const iconCount = 105;

    for (let i = 0; i < iconCount; i++) {
        const icon = document.createElement('i');
        const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
        icon.className = `${randomIcon} tech-icon-float`;
        bg.appendChild(icon);
    }
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    document.querySelectorAll('.tech-icon-float').forEach(icon => {
        const rect = icon.getBoundingClientRect();
        const iconX = rect.left + rect.width / 2;
        const iconY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
            Math.pow(mouseX - iconX, 2) + Math.pow(mouseY - iconY, 2)
        );

        if (distance < 150) {
            const scale = 1 + (150 - distance) / 300;
            const opacity = 0.04 + (150 - distance) / 400;
            icon.style.transform = `scale(${scale})`;
            icon.style.opacity = opacity;
            icon.style.filter = `grayscale(${100 - (150 - distance) / 2}%)`;
        } else {
            icon.style.transform = 'scale(1)';
            icon.style.opacity = '0.04';
            icon.style.filter = 'grayscale(30%) brightness(85%) contrast(120%)';
        }
    });
});

createStaticBackground();

function typeInTerminal(skipDelay = false) {
    const terminalContent = document.getElementById('terminalContent');
    const currentLang = localStorage.getItem('language') || 'es';
    const elements = translations[currentLang];
    if (terminalTimeout) {
        clearTimeout(terminalTimeout);
        terminalTimeout = null;
    }

    while (terminalContent.children.length > 4) {
        terminalContent.removeChild(terminalContent.lastChild);
    }

    const aboutText = [
        elements.aboutText1,
        elements.aboutText2,
        elements.aboutText3
    ]

    let lineIndex = 0;
    function addLine() {
        if (lineIndex < aboutText.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = aboutText[lineIndex];
            line.style.opacity = '0';
            line.style.animation = 'terminalFadeIn 0.3s ease forwards';
            terminalContent.appendChild(line);
            lineIndex++;
            terminalTimeout = setTimeout(addLine, skipDelay ? 200 : 400);
        }
    }
    terminalTimeout = setTimeout(addLine, skipDelay ? 100 : 1000);
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

function setupThemeSelector(btnId, dropdownId, iconId) {
    const themeBtn = document.getElementById(btnId);
    const themeDropdown = document.getElementById(dropdownId);
    const themeIcon = document.getElementById(iconId);

    if (!themeBtn) return;

    themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.theme-dropdown, .lang-dropdown').forEach(d => {
            if (d !== themeDropdown) d.classList.remove('active');
        });
        themeDropdown.classList.toggle('active');
    });

    themeDropdown.querySelectorAll('[data-theme]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const theme = btn.dataset.theme;
            applyTheme(theme);
            themeDropdown.classList.remove('active');
        });
    });
}

function applyTheme(theme) {
    localStorage.setItem('theme', theme);

    if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        updateThemeIcons('fas fa-desktop');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcons(theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun');
    }
}

function updateThemeIcons(iconClass) {
    const icons = ['themeIcon', 'themeIconDesktop'];
    icons.forEach(id => {
        const icon = document.getElementById(id);
        if (icon) icon.className = iconClass;
    });
}

function setupLanguageSelector(btnId, dropdownId, langId) {
    const langBtn = document.getElementById(btnId);
    const langDropdown = document.getElementById(dropdownId);
    const currentLang = document.getElementById(langId);

    if (!langBtn) return;

    langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.theme-dropdown, .lang-dropdown').forEach(d => {
            if (d !== langDropdown) d.classList.remove('active');
        });
        langDropdown.classList.toggle('active');
    });

    langDropdown.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = btn.dataset.lang;
            applyLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
}

function changeLanguage(lang) {
    const elements = translations[lang];

    document.querySelector('.nav-links a[href="#sobre-mi"]').textContent = elements.navAbout;
    document.querySelector('.nav-links a[href="#proyectos"]').textContent = elements.navProjects;
    document.querySelector('.nav-links a[href="#habilidades"]').textContent = elements.navSkills;
    document.querySelector('.nav-links a[href="#contacto"]').textContent = elements.navContact;

    document.querySelector('.hero-tag').textContent = elements.heroTag;
    document.querySelector('.hero h1').innerHTML = elements.heroTitle;
    document.querySelector('.hero-description').innerHTML = elements.heroDescription;
    document.querySelector('.availability-badge').textContent = elements.heroBadge;
    document.querySelector('.hero-button-cv').textContent = elements.heroButton;

    const terminalLines = document.querySelectorAll('.terminal-line');
    if (terminalLines.length >= 4) {
        terminalLines[0].textContent = elements.terminalLine1;
        terminalLines[1].textContent = elements.terminalLine2;
        terminalLines[3].innerHTML = `<span class="terminal-prompt">PS</span> <span class="terminal-path">C:\\Users\\Mrrobotcode></span> .\\${elements.terminalCommand}`;
    }

    typeInTerminal(true);

    document.querySelector('#proyectos .section-title').textContent = elements.projectsTitle;
    document.querySelector('#proyectos .section-subtitle').textContent = elements.projectsSubtitle;

    const projectTitles = document.querySelectorAll('.project-content h3');
    const projectDescs = document.querySelectorAll('.project-content p');

    if (projectTitles[0]) projectTitles[0].textContent = elements.project1Title;
    if (projectDescs[0]) projectDescs[0].textContent = elements.project1Desc;
    if (projectTitles[1]) projectTitles[1].textContent = elements.project2Title;
    if (projectDescs[1]) projectDescs[1].textContent = elements.project2Desc;
    if (projectTitles[2]) projectTitles[2].textContent = elements.project3Title;
    if (projectDescs[2]) projectDescs[2].textContent = elements.project3Desc;

    document.querySelector('#habilidades .section-title').textContent = elements.skillsTitle;
    document.querySelector('#habilidades .section-subtitle').textContent = elements.skillsSubtitle;

    document.querySelector('#contacto .section-title').textContent = elements.contactTitle;
    document.querySelector('#contacto .section-subtitle').textContent = elements.contactSubtitle;
    document.querySelector('.contact-intro p').textContent = elements.contactIntro;

    const labels = document.querySelectorAll('.form-group label');
    if (labels[0]) labels[0].innerHTML = `${elements.contactName} <span class="required">*</span>`;
    if (labels[1]) labels[1].innerHTML = `${elements.contactEmail} <span class="required">*</span>`;
    if (labels[2]) labels[2].innerHTML = `${elements.contactSubject} <span class="required">*</span>`;
    if (labels[3]) labels[3].innerHTML = `${elements.contactMessage} <span class="required">*</span>`;

    document.getElementById('name').placeholder = elements.contactNamePlaceholder;
    document.getElementById('email').placeholder = elements.contactEmailPlaceholder;
    document.getElementById('subject').placeholder = elements.contactSubjectPlaceholder;
    document.getElementById('message').placeholder = elements.contactMessagePlaceholder;

    document.querySelector('.submit-btn').textContent = elements.contactButton;

    window.currentLangMessages = {
        success: elements.contactSuccess,
        error: elements.contactError
    };
}

function applyLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguageDisplay(lang);
    changeLanguage(lang);
}

function updateLanguageDisplay(lang) {
    const langDisplays = ['currentLang', 'currentLangDesktop'];
    langDisplays.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = lang.toUpperCase();
    });
}

setupThemeSelector('themeBtnDesktop', 'themeDropdownDesktop', 'themeIconDesktop');
setupThemeSelector('themeBtn', 'themeDropdown', 'themeIcon');
setupLanguageSelector('langBtnDesktop', 'langDropdownDesktop', 'currentLangDesktop');
setupLanguageSelector('langBtn', 'langDropdown', 'currentLang');

document.addEventListener('click', () => {
    document.querySelectorAll('.theme-dropdown, .lang-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

const savedTheme = localStorage.getItem('theme') || 'dark';
const savedLang = localStorage.getItem('language') || 'es';

applyTheme(savedTheme);
applyLanguage(savedLang);

const projectImages = {
    0: [
        "img/farmacia_image_one.png",
        "img/farmacia_image_two.png",
        "img/farmacia_image_three.png",
        "img/farmacia_image_four.png",
        "img/farmacia_image_five.png",
        "img/farmacia_image_six.png",
        "img/farmacia_image_seven.png",
        "img/farmacia_image_eight.png",
        "img/farmacia_image_nine.png",
        "img/farmacia_image_ten.png",
        "img/farmacia_image_eleven.png"
    ],
    1: [
        "img/baberia_image_one.jpeg",
        "img/baberia_image_two.jpeg",
        "img/baberia_image_three.jpeg",
        "img/baberia_image_four.jpeg",
        "img/baberia_image_five.jpeg",
        "img/baberia_image_six.jpeg",
        "img/baberia_image_seven.jpeg",
        "img/baberia_image_eight.jpeg",
        "img/baberia_image_nine.jpeg",
        "img/baberia_image_ten.jpeg",
        "img/baberia_image_eleven.jpeg",
        "img/baberia_image_twelve.jpeg"
    ],
    2: [
        'img/removegb-picture_one.png'
    ]
};

let currentProject = 0;
let currentImageIndex = 0;
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalCounter = document.getElementById('modalCounter');

document.querySelectorAll('.project-image').forEach((img, index) => {
    img.addEventListener('click', () => {
        currentProject = index;
        currentImageIndex = 0;
        openModal();
    });
});

function openModal() {
    const images = projectImages[currentProject];
    if (!images || images.length === 0) return;

    modalImage.src = images[currentImageIndex];
    updateCounter();
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateCounter() {
    const images = projectImages[currentProject];
    modalCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

function showNextImage() {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
    updateCounter();
}

function showPrevImage() {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
    updateCounter();
}

modalClose.addEventListener('click', closeModal);
modalNext.addEventListener('click', showNextImage);
modalPrev.addEventListener('click', showPrevImage);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        closeModal();
    }
    if (e.key === 'ArrowRight' && imageModal.classList.contains('active')) {
        showNextImage();
    }
    if (e.key === 'ArrowLeft' && imageModal.classList.contains('active')) {
        showPrevImage();
    }
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeModal();
    }
});

(function() {
    emailjs.init("AYiHxp-rUXvAwqwKJ");
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        from_name: this.from_name.value,
        from_email: this.from_email.value,
        subject: this.subject.value,
        message: this.message.value,
        to_email: 'jenuelmercedes27@gmail.com'
    };

    emailjs.send('service_i4ydrm2', 'template_htgrzyk', formData).then(function(response) {
        alert('¡Mensaje enviado exitosamente!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Hubo un error al enviar el mensaje.');
        console.error('Error: ', error);
    });
});

window.addEventListener('load', () => {
    document.getElementById('main-content').classList.add('visible');
    const savedLang = localStorage.getItem('language') || 'es';
    updateLanguageDisplay(savedLang);
    changeLanguage(savedLang);
    typeInTerminal();
});