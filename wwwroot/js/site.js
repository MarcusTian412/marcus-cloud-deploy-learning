// Luo Tianyi Theme - Interactive Effects

document.addEventListener('DOMContentLoaded', function () {
    // Create floating particles in hero section
    const particles = document.getElementById('particles');
    if (particles) {
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            p.style.width = (3 + Math.random() * 6) + 'px';
            p.style.height = p.style.width;
            if (Math.random() > 0.5) {
                p.style.background = '#E8A0BF';
            }
            particles.appendChild(p);
        }
    }

    // Scroll-triggered fade-in animation
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.profile-card, .song-card, .timeline-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add staggered delay to cards
    document.querySelectorAll('.profile-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.song-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.08) + 's';
    });
    document.querySelectorAll('.timeline-item').forEach(function (item, i) {
        item.style.transitionDelay = (i * 0.15) + 's';
    });
});

// CSS class for fade-in
(function () {
    var style = document.createElement('style');
    style.textContent = '.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
})();
