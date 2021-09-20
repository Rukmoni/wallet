import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useAppSelector} from '../reduxStore/reduxHooks';
import { Transaction } from '../interfaces/transaction';

type Iprops={
  trans:Transaction;

}

const Item = ({ trans }:Iprops) => {
 // console.log(trans)
  return(
  <View style={styles.item}>
    <Text style={styles.title}>{trans.itemName}</Text>
    <Text style={styles.cost}>{trans.itemAmount}</Text>
  </View>
);
  }

const TransactionsList = () => {
  const walletState = useAppSelector(state => state.wallet);
  const renderItem = (item) => <Item trans={item.item} />;
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
    backgroundColor:'#EFEFEF'
 
   
  },
 titleBox:{
   flexDirection:'row',
   height:50,
   justifyContent:'center',
   alignItems:'center'

 },
 titleTxt:{
   fontSize:18,
   fontWeight:'bold'

 },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 12,
    flexDirection:'row',
    justifyContent:'space-between',
    borderLeftWidth:5,
    borderLeftColor:'green'

  },
  title: {
    fontSize: 14,
    color:'#000',
    fontWeight:'bold'
  },
  cost: {
    fontSize: 14,
    fontWeight:'bold'
  },
});
export default TransactionsList;
