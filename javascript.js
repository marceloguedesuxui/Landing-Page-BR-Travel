document.addEventListener('DOMContentLoaded', () => {
    console.log("BR Travel Script Loaded");

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const destinationsGrid = document.querySelector('.destinations-grid');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    if (destinationsGrid && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const cardWidth = destinationsGrid.querySelector('.destination-card').offsetWidth;
            const gap = 30;
            destinationsGrid.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = destinationsGrid.querySelector('.destination-card').offsetWidth;
            const gap = 30;
            destinationsGrid.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = menuToggle?.querySelector('i');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            }
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            });
        });
    }
});
