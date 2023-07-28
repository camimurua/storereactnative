import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/product.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});