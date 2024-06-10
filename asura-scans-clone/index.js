document.addEventListener("DOMContentLoaded", function () {

  const scrollToTopBtn = document.getElementById('scroll-to-top');

  function handleScroll() {
    scrollToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', handleScroll);
  scrollToTopBtn.addEventListener('click', scrollToTop);
});
