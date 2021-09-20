import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppDispatch} from '../reduxStore/reduxHooks';
import {getTranscations} from '../reduxStore/walletSlice';
import {WalletCard, TransactionList} from '../components';
import FAB from 'react-native-fab';
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
      <FAB
        buttonColor="red"
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          console.log('FAB pressed');
        }}
        visible={true}
      />
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
