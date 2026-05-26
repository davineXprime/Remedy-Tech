/* ============================================
   GOLD POUCH - Background Animations
   Canvas-based Heartbeat & Effects
   ============================================ */

// Initialize Canvas for Heartbeat Animation
const canvas = document.getElementById('heartbeatCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Heartbeat animation parameters
    let time = 0;
    const frequency = 0.05;
    const amplitude = 50;

    function drawHeartbeat() {
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid-based heartbeat line
        time += frequency;

        const centerY = height * 0.3;
        const segmentWidth = width / 100;

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0)');
        gradient.addColorStop(0.3, 'rgba(255, 215, 0, 0.4)');
        gradient.addColorStop(0.5, 'rgba(220, 20, 60, 0.6)');
        gradient.addColorStop(0.7, 'rgba(255, 215, 0, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();

        for (let i = 0; i < width; i += segmentWidth) {
            const x = i;
            let y = centerY;

            // Heartbeat curve
            const pulse = Math.sin(time - i * 0.02) * amplitude * Math.exp(-i * 0.01 / width);

            if (i < width * 0.3) {
                y += Math.sin((time - i * 0.05) * 3) * 20;
            } else if (i < width * 0.7) {
                y += pulse;
            } else {
                y += Math.sin((time - i * 0.05) * 2) * 15;
            }

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();

        // Draw heart shape at peak
        const heartX = width * 0.5;
        const heartY = centerY - amplitude * 0.3;
        drawNeonHeart(heartX, heartY, 30);

        requestAnimationFrame(drawHeartbeat);
    }

    function drawNeonHeart(x, y, size) {
        ctx.save();
        ctx.translate(x, y);

        // Heart shape with glow
        ctx.fillStyle = 'rgba(220, 20, 60, 0.3)';
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(220, 20, 60, 0.8)';

        ctx.beginPath();
        ctx.moveTo(0, size * 0.3);
        ctx.bezierCurveTo(-size * 0.5, -size * 0.2, -size * 0.8, -size * 0.5, -size * 0.3, -size * 0.8);
        ctx.bezierCurveTo(0, -size, size * 0.3, -size * 0.8, size * 0.8, -size * 0.5);
        ctx.bezierCurveTo(size * 0.5, -size * 0.2, 0, size * 0.3, 0, size * 0.3);
        ctx.fill();

        ctx.restore();
    }

    drawHeartbeat();
}

// ===== ANIMATED BACKGROUND PARTICLES =====
class BackgroundParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#FFD700' : '#DC143C';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// ===== SCROLL-TRIGGERED ANIMATIONS =====
const scrollAnimationElements = document.querySelectorAll('.product-card, .blog-card, .section-title');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

scrollAnimationElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(el);
});

// ===== PARALLAX EFFECT =====
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const moveX = (x - 0.5) * 20 * (index + 1);
        const moveY = (y - 0.5) * 20 * (index + 1);
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

console.log('%c✨ Background animations loaded', 'color: #FFD700; font-weight: bold;');
