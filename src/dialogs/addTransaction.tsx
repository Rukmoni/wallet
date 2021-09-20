import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useAppSelector} from '../reduxStore/reduxHooks';
import CurrencyInput from 'react-native-currency-input';
const AddTransaction = () => {
  const walletState = useAppSelector(state => state.wallet);
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Form</Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeNumber}
          //value={number}
          placeholder="name"
          keyboardType="numeric"
        />
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={formattedValue => {
            console.log(formattedValue); // $2,310.46
          }}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});
export default AddTransaction;
