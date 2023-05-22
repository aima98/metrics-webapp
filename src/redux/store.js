import { configureStore } from '@reduxjs/toolkit';
import crypto from './slices/cryptoSlice';

const Store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default Store;
