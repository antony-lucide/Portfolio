const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
    scrollBtn.classList.add('opacity-100');
  } else {
    scrollBtn.classList.add('opacity-0', 'pointer-events-none');
    scrollBtn.classList.remove('opacity-100');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 