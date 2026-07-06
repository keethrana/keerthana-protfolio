const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.16 });

sections.forEach((section, idx) => {
    section.style.setProperty('--delay', `${idx * 140}ms`);
    observer.observe(section);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach((a) => {
        a.addEventListener('click', () => nav.classList.remove('open'));
    });
}

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
    if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    }
});

const particleLayer = document.querySelector('.particle-layer');
if (particleLayer) {
    for (let i = 0; i < 24; i++) {
        const dot = document.createElement('span');
        dot.className = 'particle';
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.animationDuration = `${6 + Math.random() * 6}s`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        particleLayer.appendChild(dot);
    }
}

const title = document.querySelector('.hero h1');
if (title) {
    const text = title.innerText;
    title.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 70);
        }
    }
    typing();
}

const cards = document.querySelectorAll('.card, .box');
cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        const rotateX = (dy * 5).toFixed(2);
        const rotateY = (dx * -5).toFixed(2);
        card.style.transform = `translateY(-6px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

const form = document.getElementById('contactForm');
const success = document.querySelector('.submit-success');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        if (btn) {
            btn.disabled = true;
            btn.innerText = 'Sending...';
            setTimeout(() => {
                btn.innerText = 'Sent';
                if (success) success.classList.add('show');
                form.reset();
                setTimeout(() => {
                    if (success) success.classList.remove('show');
                    btn.innerText = 'Send Message';
                    btn.disabled = false;
                }, 2200);
            }, 1000);
        }
    });
}
