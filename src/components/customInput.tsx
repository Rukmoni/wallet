import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type IcustomInput = {
  onChangeText: () => any;
  placeholder: string;
  value: any;
  errors?: string;
};
const CustomInput = (props: IcustomInput) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          {...props}
          onChange={props.onChangeText}
        />
      </View>
      {props.errors && <Text style={styles.errorTxt}>{props.errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  inputContainer: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#CCCCCC',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 0,
    padding: 10,
  },
  errorTxt: {
    color: 'red',
  },
});
export default CustomInput;
