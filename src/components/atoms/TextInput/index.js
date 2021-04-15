import React from 'react';
import {StyleSheet, TextInput as TextInputRN, Text, View} from 'react-native';
import {ICFlag} from '../../../assets';

const TextInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <ICFlag />
        <Text style={styles.title}>+880</Text>
      </View>
      <TextInputRN
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: -20,
          paddingLeft: 98,
          borderBottomWidth: 1,
          borderColor: '#E2E2E2',
          padding: 12,
          paddingRight: 34,
          fontSize: 18,
          color: '#030303',
          fontFamily: 'Poppins-Medium',
        }}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {},
  icon: {
    top: 20.9,
    marginRight: 12,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    marginLeft: 12,
    color: '#030303',
    fontFamily: 'Poppins-Medium',
  },
});
