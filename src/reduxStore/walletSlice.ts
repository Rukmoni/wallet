import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {Transaction} from '../interfaces/transaction';

// Define a type for the slice state
interface walletState {
  value: number;
  transactions: Transaction[];
  walletTotal: number;
  creditsTotal: number;
  debitsTotal: number;
  credits: Transaction[];
  debits: Transaction[];
}

// Define the initial state using that type
const initialState: walletState = {
  value: 0,
  transactions: [],
};

export const walletSlice = createSlice({
  name: 'wallet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTranscations() {},
    setTranscations(state, action) {
      state.transactions = action.payload;
      state.credits = state.transactions.filter(
        trans => trans.type === 'credit',
      );
      state.debits = state.transactions.filter(trans => trans.type === 'debit');
      state.creditsTotal = state.credits.reduce((a, b) => a + b.itemAmount, 0);
      state.debitsTotal = state.debits.reduce((a, b) => a + b.itemAmount, 0);
    },
    addTransaction: () => {},

    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  getTranscations,
  setTranscations,
  addTransaction,
} = walletSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.wallet.value;

export default walletSlice.reducer;
