import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type IcustomInput = {
  options: array;
  current: string;
  onChange: Function;
};
const TransOptions = (props: IcustomInput) => {
  const {options, onChange, current} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          current === props.options[0]
            ? [styles.btnContainer, {backgroundColor: 'green'}]
            : styles.btnContainer
        }
        onPress={() => onChange(options[0])}>
        <Text style={styles.btnText}>Debit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          current === props.options[1]
            ? [styles.btnContainer, {backgroundColor: 'red'}]
            : styles.btnContainer
        }
        onPress={() => onChange(options[1])}>
        <Text style={styles.btnText}>Credit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnContainer: {
    width: '45%',
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#CCCCCC',
    backgroundColor: 'gray',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 14,
  },
});
export default TransOptions;
