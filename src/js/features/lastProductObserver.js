import { fetchProducts } from './fetchProducts';

const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

export const observeLastProduct = (lastProduct) => {
  const lastProductObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchProducts();
        lastProductObserver.unobserve(entry.target);
      }
    });
  }, observerOption);

  lastProductObserver.observe(lastProduct);
};
