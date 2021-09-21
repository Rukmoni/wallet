import {Transaction} from './../interfaces/transaction';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

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
  walletTotal: 0,
  creditsTotal: 0,
  debitsTotal: 0,
  credits: [],
  debits: [],
};
function getValues(trans: Transaction[]) {
  let transactions = trans;
  let credits = transactions.filter(trans => trans.type === 'credit');
  let debits = transactions.filter(trans => trans.type === 'debit');
  let creditsTotal = credits.reduce((a, b) => a + b.itemAmount, 0);
  let debitsTotal = debits.reduce((a, b) => a + b.itemAmount, 0);
  let walletTotal = transactions.reduce((a, b) => a + b.itemAmount, 0);
  return {
    transactions,
    credits,
    debits,
    creditsTotal,
    debitsTotal,
    walletTotal,
  };
}
export const walletSlice = createSlice({
  name: 'wallet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTranscations() {},
    setTranscations(state, action) {
      let _walletState = getValues(action.payload);
      Object.assign(state, _walletState);
    },
    addTransaction: (state,action) => {},
    deleteTransaction: (state,action) => {},

    // Use the PayloadAction type to declare the contents of `action.payload`
  /*   incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }, */
  },
});

export const {
 
  incrementByAmount,
  getTranscations,
  setTranscations,
  addTransaction,
  deleteTransaction,
} = walletSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.wallet.value;

export default walletSlice.reducer;
