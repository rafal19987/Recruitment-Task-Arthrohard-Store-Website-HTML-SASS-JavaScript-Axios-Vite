import { renderProducts } from '../helpers/renderProducts';
import { getLastProductOfProducts } from '../helpers/getLastProductOfProducts';
import { observeLastProduct } from './lastProductObserver';
import { getProductsFromApi } from '../helpers/getProductsFromApi';

export const fetchProducts = async () => {
  try {
    const products = await getProductsFromApi();
    renderProducts(products);
    const lastProductOfProducts = getLastProductOfProducts();
    observeLastProduct(lastProductOfProducts);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
