export interface Transaction {
  itemAmount: number;
  itemName: string;
  isDeleted: false;
  category?: string;
  type: string;
  _id?: string;
}
