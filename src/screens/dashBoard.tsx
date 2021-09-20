import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppDispatch} from '../reduxStore/reduxHooks';
import {getTranscations} from '../reduxStore/walletSlice';

const DashBoard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTranscations());
  }, [dispatch]);

  return (
    <View>
      <Text>DashBoard</Text>
    </View>
  );
};
export default DashBoard;
