import axios from 'axios';

import { settings } from './settings';

export const getProductsFromApi = async () => {
  const res = await axios.get(
    `https://brandstestowy.smallhost.pl/api/random?pageNumber=${settings.page}&pageSize=${settings.productsPerPage}`
  );
  const products = res.data.data;
  settings.incrementPage();
  return products;
};
