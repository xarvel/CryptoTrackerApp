import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@app/store';

type Symbol = string;

export interface SymbolsState {
  value: string[];
}

const initialState: SymbolsState = {
  value: [],
};

export const symbolsSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    appendSymbol: (state, action: PayloadAction<Symbol>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const {appendSymbol} = symbolsSlice.actions;

export const selectSymbols = (state: RootState) => state.symbols.value;

export default symbolsSlice.reducer;
