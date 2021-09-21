import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../reduxStore/reduxHooks';
import {Transaction} from '../interfaces/transaction';
import {icons} from '../assets/images';
import {deleteTransaction} from '../reduxStore/walletSlice';

type Iprops = {
  trans: Transaction;
};

const Item = ({trans}: Iprops) => {
  const dispatch = useAppDispatch();
  // console.log(trans)
  return (
    <View style={trans.type === 'debit' ? styles.itemDebit : styles.itemCredit}>
      <Text style={styles.title}>{trans.itemName}</Text>
      <Text
        style={trans.type === 'debit' ? styles.costDebit : styles.costCredit}>
        {trans.itemAmount}
      </Text>
      <TouchableOpacity onPress={() => dispatch(deleteTransaction(trans._id))}>
        <Image style={styles.icon} source={icons.delete} />
      </TouchableOpacity>
    </View>
  );
};

const TransactionsList = () => {
  const walletState = useAppSelector(state => state.wallet);
  const renderItem = item => <Item trans={item.item} />;
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleTxt}>TransactionsList</Text>
      </View>
      <FlatList
        data={walletState.transactions}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  titleBox: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDebit: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
  itemCredit: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    borderLeftColor: 'red',
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  costCredit: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  costDebit: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
export default TransactionsList;
