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
      console.log(index);
      toggleActiveClass({ target: navLinks[index] });

      // index 2 means 'producty' section, here we can handle start fetching products
      if (index === 2) {
        console.log('products section is visible we can fetch data');
      }
    }
  });
}, observerOption);

sections.forEach((section) => {
  observer.observe(section);
});
