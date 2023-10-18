const navLinks = document.querySelectorAll('.nav__list-link');
const sections = [...document.querySelectorAll('.observableSection')];
const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
};

// set first section as initial active
navLinks[0].classList.add('nav__list-link--active');

navLinks.forEach((item) =>
  item.addEventListener('click', (e) => toggleActiveClass(e))
);

const toggleActiveClass = (e) => {
  navLinks.forEach((item) => {
    item.classList.remove('nav__list-link--active');
  });

  e.target.classList.add('nav__list-link--active');
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = sections.indexOf(entry.target);
      toggleActiveClass({ target: navLinks[index] });
    }
  });
}, observerOption);

sections.forEach((section) => {
  observer.observe(section);
});
