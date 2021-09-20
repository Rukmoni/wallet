import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../reduxStore/reduxHooks';
import {currencyFormatter} from '../utils/helpers'

const WalletCard = () => {
  const walletState = useAppSelector(state => state.wallet);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>{currencyFormatter(walletState.walletTotal)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    marginTop: 40,
    alignItems: 'center',
    backgroundColor:'green',
    marginBottom:20,
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
export default WalletCard;
