import { renderProductDetails } from './renderProductDetails';
const productsList = document.querySelector('.products__list');

const Product = ({ id, name, value }) => {
  const product = document.createElement('li');
  product.classList.add('product');
  product.addEventListener('click', () =>
    renderProductDetails({ id, name, value })
  );
  product.innerText = id;
  return product;
};

export const renderProducts = (products) => {
  products.map((product) => {
    let newContent = Product({
      id: product.id,
      name: product.name,
      value: product.value,
    });
    productsList.appendChild(newContent);
  });
};
