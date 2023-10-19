import { renderProducts } from './renderProducts';
import { getLastProductOfProducts } from './getLastProductOfProducts';
import { observeLastProduct } from './lastProductObserver';
import { getProductsFromApi } from './getProductsFromApi';

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
