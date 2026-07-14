document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('[data-fade]');

  if (!('IntersectionObserver' in window)) {
    faders.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  faders.forEach(el => io.observe(el));
});
