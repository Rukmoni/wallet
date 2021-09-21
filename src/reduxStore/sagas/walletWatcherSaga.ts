import {takeLatest, call, put} from 'redux-saga/effects';
import {Transaction} from '../../interfaces/transaction';
import {
  getTranscations,
  setTranscations,
  addTransaction,
  deleteTransaction,
} from '../walletSlice';
import {
  fetchInitialData,
  addTransactionAPI,
  delteTransactionAPI,
} from '../../services/transactionService';

/**
 * Handle Transactions
 */
export function* handleGetTransactions() {
  let transactions = yield call(fetchInitialData);
  yield put(setTranscations(transactions));
}

/**
 * Handle Add Transcation
 */
export function* handleAddTransaction({payload}) {
    console.log("handleAddTransaction",payload)
  let newTranscation: Transaction = {
    itemAmount: 10000,
    itemName: 'salary',
    isDeleted: false,
    type: 'credit',
    _id: '',
    category: '',
  };
  let transactions = yield call(addTransactionAPI, payload);
  console.log(transactions.length);
  yield put(setTranscations(transactions));
}
/**
 * Delete Transaction
 */

export function* handleDeleteTransaction({payload}) {
  console.log('handleDeleteTransactionsaga', payload);
  let transactions = yield call(delteTransactionAPI, payload);
  yield put(setTranscations(transactions));
}

/**
 * Watcher Saga
 */
export function* watcherSaga() {
  yield takeLatest(getTranscations.type, handleGetTransactions);
  yield takeLatest(addTransaction.type, handleAddTransaction);
  yield takeLatest(deleteTransaction.type, handleDeleteTransaction);
}
