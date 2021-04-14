import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 19,
    paddingVertical: 24.5,
    width: 353,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53b175',
  },
  title: {
    fontSize: 16,
    color: '#FFF9FF',
    fontFamily: 'Poppins-Regular',
  },
});
