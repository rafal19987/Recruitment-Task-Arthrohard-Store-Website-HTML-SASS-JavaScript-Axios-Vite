import axios from 'axios';

const productSection = document.querySelector('#products');
const productsList = document.querySelector('.products__list');
const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

let page = 1;
let pageSize = 50;
let isFirstRender = true;
let lastItem = null;

const incrementPage = () => (page += 1);

const Product = (id) => {
  return `
  <li class='product'>${id}</li>
  `;
};

export const fetchProducts = async () => {
  try {
    const res = await axios.get(
      `https://brandstestowy.smallhost.pl/api/random?pageNumber=${page}&pageSize=${pageSize}`
    );
    const data = res.data.data;
    isFirstRender = false;
    incrementPage();

    const HTMLFragment = [];
    data.map((product) => {
      let newContent = Product(product.id);
      HTMLFragment.push(newContent);
    });
    productsList.innerHTML += HTMLFragment.join(' ');

    const productElements = Array.from(
      productsList.getElementsByClassName('product')
    );

    if (productElements.length > 0) {
      const lastProductElement = productElements[productElements.length - 1];
      const lastItemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('3');
            fetchProducts();
            lastItemObserver.unobserve(entry.target); // Unobserve the current element
          }
        });
      }, observerOption);
      lastItemObserver.observe(lastProductElement);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
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
