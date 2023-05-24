import { configureStore } from '@reduxjs/toolkit';
import crypto from './slices/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default store;
