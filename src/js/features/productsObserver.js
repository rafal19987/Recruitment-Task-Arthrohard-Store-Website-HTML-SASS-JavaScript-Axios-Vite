import { fetchProducts } from './fetchProducts';

const productSection = document.querySelector('.products__select-container');
const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fetchProducts();
      observer.unobserve(entry.target);
    }
  });
}, observerOption);

observer.observe(productSection);
