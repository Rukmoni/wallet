import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {useAppDispatch} from '../reduxStore/reduxHooks';
import {getTranscations} from '../reduxStore/walletSlice';
import {WalletCard, TransactionList} from '../components';
import AddTransaction from '../dialogs/addTransaction';
import FAB from 'react-native-fab';
const DashBoard = () => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);

  /**
   * Fetching Datas , can add Loading logics here to Finetune AppLoading
   */
  useEffect(() => {
    dispatch(getTranscations());
  }, [dispatch]);

/**/
const handleModalClose = () => {
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={showForm}>
        <AddTransaction onClose={handleModalClose} />
      </Modal>
      <Text>DashBoard</Text>
      <WalletCard />
      <TransactionList />
      <FAB
        buttonColor="red"
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          console.log('FAB pressed');
          setShowForm(true);
        }}
        visible={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});
export default DashBoard;
