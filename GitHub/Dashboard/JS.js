// Add scroll animation to main content
const mainContent = document.querySelector('.layout-content-container');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  mainContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});