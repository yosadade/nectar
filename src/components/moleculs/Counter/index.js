import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICMinus, ICAddGreen} from '../../../assets';

const Counter = ({onPressMin, onPressAdd, count}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressMin}>
        <ICMinus />
      </TouchableOpacity>
      <View style={styles.wrapperCount}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressAdd}>
        <ICAddGreen />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperCount: {
    width: 45,
    height: 45,
    borderRadius: 17,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
});
