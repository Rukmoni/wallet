import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../reduxStore/reduxHooks';
import {currencyFormatter} from '../utils/helpers'

const TransactionsList = () => {
  const walletState = useAppSelector(state => state.wallet);
  return (
    <View style={styles.container}>
     <Text>TransactionsList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,

    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TransactionsList;
