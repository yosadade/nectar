import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = ({marginHorizontal = 25}) => {
  return <View style={styles.countainer(marginHorizontal)} />;
};

export default Divider;

const styles = StyleSheet.create({
  countainer: marginHorizontal => ({
    borderWidth: 0.5,
    marginVertical: 15,
    marginHorizontal: marginHorizontal,
    borderColor: '#E2E2E2',
  }),
});
