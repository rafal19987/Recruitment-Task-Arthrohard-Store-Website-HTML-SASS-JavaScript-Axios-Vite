const productsPerPage = document.querySelector('#itemsPerPage');

export const settings = {
  page: 1,
  productsPerPage: productsPerPage.value,
  incrementPage() {
    return (this.page = this.page + 1);
  },
  resetPage() {
    return (this.page = 1);
  },
};
