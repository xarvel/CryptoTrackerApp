import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '@app/store';
import {fetchAssets} from '@app/requests';
import {AssetsResult} from '@app/requests/fetchAssets';
import BigNumber from 'bignumber.js';

export interface CounterState {
  data: AssetsResult;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  data: [],
  status: 'idle',
};

export const loadAssetsAsync = createAsyncThunk(
  'assets/fetchAssets',
  async () => {
    return fetchAssets();
  },
);

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadAssetsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadAssetsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(loadAssetsAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const {} = assetsSlice.actions;

export const selectAssetsStatus = (state: RootState) => state.assets.status;

export const selectAssets = (state: RootState) =>
  state.assets.data.map(item => ({
    ...item,
    priceUSD: new BigNumber(item.priceUSD),
    price24hChange: new BigNumber(item.price24hChange),
  }));

export default assetsSlice.reducer;
