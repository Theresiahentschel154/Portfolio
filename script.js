document.addEventListener('DOMContentLoaded', () => {
    // 2. Scroll Animation (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Hero Particles Animation (Interactive Canvas)
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
        const ctx = heroCanvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = heroCanvas.width = window.innerWidth;
            height = heroCanvas.height = window.innerHeight;
            // Re-init particles on resize for better density
            particles.length = 0;
            const particleCount = Math.min(150, (width * height) / 8000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        window.addEventListener('mousemove', (e) => {
            const rect = heroCanvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? '#6a8d73' : '#f4fdd9';
                this.alpha = Math.random() * 0.4 + 0.1;
                this.originalAlpha = this.alpha;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Mouse force
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    const angle = Math.atan2(dy, dx);
                    const force = (120 - distance) / 120;
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                    this.alpha = 0.8;
                } else {
                    this.alpha = this.originalAlpha;
                }

                if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const initParticles = () => {
            resize();
            particles = [];
            for (let i = 0; i < 200; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();
    }


    // 6. Experiments Canvases (Small animated sketches)
    const expCanvases = document.querySelectorAll('.exp-canvas');
    expCanvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const type = canvas.dataset.type;
        let frame = 0;

        const animateExp = () => {
            frame++;
            const w = canvas.width = 400;
            const h = canvas.height = 400;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, w, h);

            if (type === 'particles') {
                for (let i = 0; i < 60; i++) {
                    const noise = Math.sin(frame * 0.05 + i) * 20;
                    ctx.fillStyle = i % 2 === 0 ? '#6a8d73' : '#f4fdd9';
                    ctx.beginPath();
                    ctx.arc(200 + Math.cos(i + frame * 0.02) * (100 + noise), 200 + Math.sin(i + frame * 0.02) * (100 + noise), 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (type === 'geometry') {
                ctx.strokeStyle = '#6a8d73';
                ctx.lineWidth = 1;
                ctx.translate(200, 200);
                ctx.rotate(frame * 0.01);
                for (let i = 0; i < 10; i++) {
                    ctx.rotate(Math.PI / 5 + frame * 0.001);
                    ctx.strokeRect(-40 - i * 4, -40 - i * 4, 80 + i * 8, 80 + i * 8);
                }
            }
            requestAnimationFrame(animateExp);
        };
        animateExp();
    });

    // 7. Navbar Active Link Toggle on Scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    const activeLinkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 }); // 30% section in view

    sections.forEach(section => activeLinkObserver.observe(section));

    // 9. Hero Parallax Effect
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        if (!heroContent) return;
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });

    // 10. Navbar Visibility on Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        const heroHeight = window.innerHeight; // Height of hero section
        const scrollThreshold = heroHeight * 0.4; // Show when 40% of hero is scrolled

        if (window.scrollY > scrollThreshold) {
            navbar.style.top = '0px'; // Slide down
        } else {
            navbar.style.top = '-100px'; // Hide
        }
    });

    // 11. Create Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
