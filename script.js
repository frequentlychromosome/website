// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});

// Search Bar Functionality
const searchBar = document.getElementById('search-bar');
const servicesList = document.getElementById('services-list');
const serviceItems = servicesList.querySelectorAll('.service-item');

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    serviceItems.forEach(item => {
        const serviceName = item.dataset.name.toLowerCase();
        if (serviceName.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});



// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-msg');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    responseMessage.style.display = 'block';
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 3000);
});
