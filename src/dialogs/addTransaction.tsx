import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../reduxStore/reduxHooks';

import {CustomInput, TransOptions} from '../components';
import {Transaction} from '../interfaces/transaction';
import {Formik} from 'formik';
import * as yup from 'yup';
/**
 * interface
 */

/**
 * Form Contstants declarations
 */
const validationSchema = yup.object().shape({
  itemName: yup.string().required(),
  itemAmount: yup.number().required(),
});
const options = ['debit', 'credit'];
/**
 * Type
 */
type IaddTransaction = {
  onClose: () => void;
};
/**
 * Form
 */
const AddTransaction = ({onClose}: IaddTransaction) => {


  let initValues: Transaction = {
    itemAmount: 0,
    isDeleted: false,
    itemName: '',
    type: 'debit',
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Transcations</Text>
          <TouchableOpacity style={{marginLeft: 50}} onPress={onClose}>
            <Text style={styles.headerText}>X</Text>
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={initValues}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={styles.formContainer}>
              <CustomInput
                onChangeText={handleChange('itemName')}
                value={values.itemName}
                placeholder="name"
                errors={errors.itemName}
              />
              <CustomInput
                onChangeText={handleChange('itemAmount')}
                value={values.itemAmount.toString()}
                placeholder="Amount"
                errors={errors.itemAmount}
              />
              <TransOptions
                options={options}
                current={values.type}
                value={values.type}
                onChange={handleChange('type')}
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.headerText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
    backgroundColor: '#ccc',
  },
  card: {
    width: '90%',
    height: 350,
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
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
  },
  formContainer: {
    marginTop: 20,
  },
  btn: {
    width: 300,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
export default AddTransaction;
