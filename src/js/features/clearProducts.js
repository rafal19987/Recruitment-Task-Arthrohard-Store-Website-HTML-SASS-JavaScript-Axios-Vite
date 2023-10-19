const productsList = document.querySelector('.products__list');

export const clearProducts = () => {
  productsList.innerHTML = '';
};
