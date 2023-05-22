import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptoItems: [],
  status: '',
};

const FETCH_CRYPTOS = 'redux/FETCH_CRYPTOS';

export const FetchCryptos = createAsyncThunk(
  FETCH_CRYPTOS,
  async (thunkAPI) => {
    try {
      const url = await axios.get('https://api.coincap.io/v2/assets');
      return url.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

const cryptoSlice = createSlice({
  name: 'cryptoReducer',
  initialState,
  reducers: {},
  extraReducers: {

    [FetchCryptos.pending]: (state) => {
      state.status = 'loading';
    },

    [FetchCryptos.fulfilled]: (state, action) => {
      state.status = 'success';
      state.cryptoItems = [
        ...state.cryptoItems, action.payload.data,
      ];
    },

    [FetchCryptos.rejected]: (state) => {
      state.status = 'failure';
    },
  },
});

export default cryptoSlice.reducer;
