import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Link = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#53B175',
  },
});
