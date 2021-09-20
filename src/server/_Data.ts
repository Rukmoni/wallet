import {Transaction} from './../interfaces/transaction';

let transcations = [
  {
    itemAmount: 800,
    itemName: 'Harry Potter Book 1',
    isDeleted: false,
    category: 'Education',
    type: 'debit',
    _id: '5e84bf4e31afde2abc9bde91',
  },
  {
    itemAmount: 3000,
    itemName: 'School Fee',
    isDeleted: false,
    category: 'Bills',
    type: 'credit',
    _id: '5e84be5fe0fabd3ff422d1ac',
  },
  {
    itemAmount: 800,
    itemName: 'Harry Potter Book 1',
    isDeleted: false,
    category: 'Education',
    _id: '5e84bfca6c65dc381cb2bf1b',
  },
  {
    itemAmount: 4000,
    itemName: 'Bought Many Vegetables',
    isDeleted: false,
    category: 'Vegetables',
    type: 'credit',
    _id: '5e856d9609435c2e807c89f7',
  },
  {
    itemAmount: 450,
    itemName: 'Grocery',
    isDeleted: false,
    category: 'Dairy',
    type: 'credit',
    _id: '5e85e35a8dbd303d54611273',
  },
];

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
/* function formatExpense() {
  return {
    _id: generateUID(),
    timeStamp:Date.now(),

  };
} */
export function _getTranscations() {
  /*  return new Promise((res, rej) => {
    setTimeout(() => res(transcations.filter(trans => !trans.isDeleted)), 1000);
  }); */
  return transcations.filter(trans => !trans.isDeleted);
}
export function _addTranscation(transcation: Transaction) {
  transcations.push({...transcation, _id: generateUID()});
  return transcations.filter(trans => !trans.isDeleted);
}

export function _deleteTranscation(_id: string) {
  transcations.find(trans => trans._id === _id).isDeleted = true;
  return transcations.filter(trans => !trans.isDeleted);
}