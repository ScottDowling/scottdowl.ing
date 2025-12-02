// Smooth scrolling for nav links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    toggleBtn.textContent = document.body.classList.contains('dark-theme')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
}

// Force resume download
const resumeLink = document.getElementById('resume-download');
if (resumeLink) {
  resumeLink.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // ensure file path is correct
    link.download = 'Scott_Dowling_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}