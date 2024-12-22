document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}); 