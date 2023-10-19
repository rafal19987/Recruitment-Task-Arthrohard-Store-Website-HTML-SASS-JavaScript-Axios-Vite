const productDetails = document.querySelector('.products__details-container');
const closeDetailsBtn = document.querySelector('.modal__close-btn');
const detailsList = document.querySelector('.modal__details-list');

const toggleProductDetails = () => {
  if (productDetails.classList.contains('hidden')) {
    productDetails.classList.remove('hidden');
  } else {
    productDetails.classList.add('hidden');
  }
};

export const renderProductDetails = ({ id, name, value }) => {
  toggleProductDetails();
  detailsList.innerHTML = '';

  const HTMLFragment = `
  <li>${id}</li>
  <li>Nazwa: ${name}</li>
  <li>Wartość: ${value}</li>
  `;

  detailsList.innerHTML = HTMLFragment;
};

closeDetailsBtn.addEventListener('click', () => toggleProductDetails());
