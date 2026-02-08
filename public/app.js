const techIcons = [
    'fab fa-js-square', 'fab fa-react', 'fab fa-node-js', 'fab fa-python',
    'fab fa-vuejs', 'fab fa-docker', 'fab fa-git-alt', 'fab fa-html5',
    'fab fa-css3-alt', 'fab fa-npm', 'fab fa-github', 'fab fa-angular',
    'fab fa-sass', 'fab fa-aws', 'fab fa-linux', 'devicon-csharp-plain', 
    'fa-brands fa-figma', 'devicon-azuresqldatabase-plain', 
    'devicon-express-original', 'devicon-astro-plain'
];

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

function typeInTerminal() {
    const terminalContent = document.getElementById('terminalContent');
    const aboutText = [
        "Me llamo José Mercedes, tengo 18 años, soy un chico sencillo, lleno de apiraciones por cumplir y con muchas ganas de aprender y crecer tanto como persona y desarrollador. ",
        "Me ha encantado la programacion desde pequeño, y desde entonces he estado anelando en convertirme en un gran desarrollador, y aunque aun me falta mucho por aprender, cada dia me esfuerzo por mejorar mis habilidades y conocimientos.",
        "Me considero una persona autodidacta y mi objetivo es seguir desarrollando proyectos innovadores que puedan tener un impacto en donde me encuentre.",
    ];

    let lineIndex = 0;
    function addLine() {
        if (lineIndex < aboutText.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = aboutText[lineIndex];
            line.style.opacity = '0';
            line.style.animation = 'terminalFadeIn 0.1s ease forwards';
            terminalContent.appendChild(line);
            lineIndex++;
            setTimeout(addLine, 400);
        }
    }
    setTimeout(addLine, 1000);
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

function applyLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguageDisplay(lang);
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
        "img/farmacia_image_one.jpeg"
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
    typeInTerminal();
});