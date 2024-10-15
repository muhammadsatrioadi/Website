// Add hover effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Add scroll animation to main content
const mainContent = document.querySelector('.layout-content-container');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  mainContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});