// ===== Navigatie Toggle =====
const navKnop = document.getElementById('navKnop');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navKnop.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Sluit menu bij klikken op link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navigatie = document.getElementById('navigatie');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navigatie.classList.add('scrolled');
    } else {
        navigatie.classList.remove('scrolled');
    }
});

// Geen filtering meer nodig - alle projecten zijn altijd zichtbaar

// ===== Contact Formulier =====
const contactFormulier = document.getElementById('contactFormulier');

contactFormulier.addEventListener('submit', (e) => {
    e.preventDefault();

    // Haal formulier data op
    const formData = new FormData(contactFormulier);
    const naam = formData.get('naam');
    const email = formData.get('email');
    const bericht = formData.get('bericht');

    // Hier zou je normaal de data naar een server sturen
    // Voor nu tonen we alleen een alert
    alert(`Bedankt voor je bericht, ${naam}! Ik neem zo snel mogelijk contact met je op.`);

    // Reset formulier
    contactFormulier.reset();
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70; // Compenseer voor vaste navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer voor Animaties =====
const observerOpties = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOpties);

// Observeer alle secties
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ===== Skill Bar Animatie =====
const skillBalken = document.querySelectorAll('.tool-voortgang');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const breedte = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = breedte;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBalken.forEach(balk => {
    skillObserver.observe(balk);
});

// ===== Initialisatie =====
console.log('Portfolio website succesvol geladen!');