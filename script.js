// ================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// Smooth Animations & Interactivity
// ================================

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const icon = navToggle.querySelector('i');

  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavLink);
window.addEventListener('load', highlightNavLink);

// ===== SCROLL ANIMATIONS (INTERSECTION OBSERVER) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// ===== FORM SUBMISSION =====
// Form now uses FormSubmit.co service to send actual emails
// No custom JavaScript needed - native form submission handles everything

// ===== TYPING EFFECT FOR HERO (OPTIONAL ENHANCEMENT) =====
// Uncomment to enable typing effect on hero title
/*
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeText() {
  if (charIndex < originalText.length) {
    heroTitle.textContent += originalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeText, 500);
});
*/

// ===== CURSOR GLOW EFFECT (OPTIONAL ENHANCEMENT) =====
// Uncomment to add a cursor glow effect
/*
document.addEventListener('mousemove', (e) => {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  document.body.appendChild(cursor);
  
  setTimeout(() => {
    cursor.remove();
  }, 1000);
});
*/

// ===== PARALLAX SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
  }
});

// ===== PROJECT CARDS INTERACTION =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(-8px) scale(1)';
  });
});

// ===== EXPERTISE CARDS STAGGER ANIMATION =====
const expertiseCards = document.querySelectorAll('.expertise-card');

expertiseCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';

  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});

// ===== CONSOLE GREETING =====
console.log('%c👋 Welcome to my portfolio!', 'color: #00D9FF; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #B8C5D6; font-size: 14px;');
console.log('%cBuilt with ❤️ in Istanbul', 'color: #8B9CAF; font-size: 12px;');
