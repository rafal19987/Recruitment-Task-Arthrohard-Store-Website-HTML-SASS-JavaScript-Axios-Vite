const productsList = document.querySelector('.products__list');

export const getLastProductOfProducts = () => {
  const productElements = Array.from(
    productsList.getElementsByClassName('product')
  );
  const lastProductElement = productElements[productElements.length - 1];
  return lastProductElement;
};
