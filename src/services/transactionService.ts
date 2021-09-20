import {
  _getTranscations,
  _addTranscation,
  _deleteTranscation,
} from '../server/_Data';
import {Transaction} from '../interfaces/transaction';

export function fetchInitialData() {
  return _getTranscations() as Transaction[];
}

export function addTransactionAPI(transcation: Transaction) {
  return _addTranscation(transcation) as Transaction[];
}

export function deleteTransaction(_id: string) {
  return _deleteTranscation(_id) as Transaction[];
}
