import { settings } from '../helpers/settings';
import { clearProducts } from '../helpers/clearProducts';
import { fetchProducts } from './fetchProducts';

const productsPerPage = document.querySelector('#itemsPerPage');

productsPerPage.addEventListener('change', () => {
  clearProducts();
  settings.resetPage();
  settings.productsPerPage = productsPerPage.value;
  fetchProducts();
});
