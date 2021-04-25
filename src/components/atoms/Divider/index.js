import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={styles.countainer} />;
};

export default Divider;

const styles = StyleSheet.create({
  countainer: {
    borderWidth: 0.5,
    borderColor: '#E2E2E2',
  },
});
