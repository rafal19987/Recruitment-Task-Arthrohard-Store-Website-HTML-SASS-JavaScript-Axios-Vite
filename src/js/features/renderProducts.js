const productsList = document.querySelector('.products__list');

const Product = (id) => {
  return `
  <li class='product'>ID: ${id}</li>
  `;
};

export const renderProducts = (products) => {
  const HTMLFragment = [];
  products.map((product) => {
    let newContent = Product(product.id);
    HTMLFragment.push(newContent);
  });
  productsList.innerHTML += HTMLFragment.join(' ');
};
