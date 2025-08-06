import './bootstrap';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav a').forEach(link => {
        if(link.href === window.location.href) {
            link.classList.add('active');
        }
    });
    document.querySelectorAll('.mob-nav a').forEach(link => {
        if(link.href === window.location.href) {
            link.classList.add('active');
        }
    });
    
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if(burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
});