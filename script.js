// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Here you would normally filter the articles based on the selected category
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would normally send the form data to a server
    // For this example, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. We will get back to you soon at ${email}.`);

    // Reset the form
    contactForm.reset();
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
const newsletterModal = document.getElementById('newsletterModal');
const closeModal = document.querySelector('.close-modal');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get email value
    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Show the modal
    newsletterModal.style.display = 'flex';

    // Reset the form
    newsletterForm.reset();
});

// Close modal
closeModal.addEventListener('click', () => {
    newsletterModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
        newsletterModal.style.display = 'none';
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(12, 35, 64, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(12, 35, 64, 0.95)';
    }
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Here you would normally perform a search
        alert(`Searching for: ${searchTerm}`);
        // In a real application, you would redirect to search results or display results
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
