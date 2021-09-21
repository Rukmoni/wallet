import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../reduxStore/reduxHooks';
import { currencyFormatter } from '../utils/helpers'

const WalletCard = () => {
  const walletState = useAppSelector(state => state.wallet);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.balanceBlock}>
          <Text>Balance</Text>
          <Text style={styles.balanceTxt}>{currencyFormatter(walletState.walletTotal)}</Text>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.balanceSubBlock}>
            <Text>Debits</Text>
            <Text style={styles.debitsTxt}>{currencyFormatter(walletState.debitsTotal)}</Text>
          </View>
          <View style={styles.balanceSubBlock}>
            <Text>Credits</Text>
            <Text style={styles.creditsTxt}>{currencyFormatter(walletState.creditsTotal)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    height: 200,
    backgroundColor: '#7AD7F0',
    borderRadius: 8,

    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

  },
  balanceBlock: {
    alignItems: 'center',
    marginTop: 50
  },
  balanceTxt: {
    fontSize: 32,
    color: 'green',
    fontWeight: 'bold'
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10

  },
  balanceSubBlock: {
    marginTop: 40,

  },
  creditsTxt: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold'
  },
  debitsTxt: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold'

  }
});
export default WalletCard;
