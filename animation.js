const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
const bounceElements = document.querySelectorAll('.bounce-on-click');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -120px 0px',
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, observerOptions);

animateOnScrollElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 100}ms`;
  revealObserver.observe(el);
});

bounceElements.forEach((el) => {
  el.addEventListener('pointerdown', () => {
    el.classList.add('bounce');
  });

  el.addEventListener('pointerup', () => {
    requestAnimationFrame(() => {
      el.classList.remove('bounce');
    });
  });

  el.addEventListener('pointerleave', () => {
    el.classList.remove('bounce');
  });
});
