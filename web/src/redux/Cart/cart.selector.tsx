export const selectProductsCount = (rootReducer: any) => {
  return rootReducer.carReducer.products.reduce(
    (acc: any, curr: any) => acc + curr.quantity,
    0
  );
};
export const selectProductsTotalPrice = (rootReducer: any) => {
  return rootReducer.carReducer.products.reduce(
    (acc: any, curr: any) => acc + curr.price * curr.quantity,
    0
  );
};
