import { settings } from './settings';
import { clearProducts } from './clearProducts';
import { fetchProducts } from './fetchProducts';

const productsPerPage = document.querySelector('#itemsPerPage');

productsPerPage.addEventListener('change', () => {
  clearProducts();
  settings.resetPage();
  fetchProducts();
});
