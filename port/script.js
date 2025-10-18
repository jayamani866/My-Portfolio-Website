console.log("Portfolio Loaded Successfully!");

// Skills bar animation
document.querySelectorAll('.skill-bar').forEach(bar => {
    let width = 0;
    let target = parseInt(bar.dataset.width);
    let interval = setInterval(() => {
        if(width >= target) clearInterval(interval);
        else { width++; bar.style.width = width + '%'; bar.textContent = width + '%'; }
    }, 15);
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
},{ threshold:0.2 });

sections.forEach(section => observer.observe(section));


window.addEventListener('DOMContentLoaded', () => {
  const certificates = document.querySelectorAll('.certificate');

  certificates.forEach((cert, index) => {
    setTimeout(() => {
      cert.style.opacity = '1';
      cert.style.transform = 'translateY(0)';
    }, index * 200); // 200ms delay between each certificate
  });
});
