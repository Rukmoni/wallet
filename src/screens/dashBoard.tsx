import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppDispatch} from '../reduxStore/reduxHooks';
import {getTranscations} from '../reduxStore/walletSlice';
import {WalletCard, TransactionList} from '../components';

const DashBoard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTranscations());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>DashBoard</Text>
      <WalletCard />
      <TransactionList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default DashBoard;
