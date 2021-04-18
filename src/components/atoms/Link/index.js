import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Link = ({title, onPress, color = '#53B175', textAlign}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title(color, textAlign)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (color, textAlign) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color,
    textAlign: textAlign,
  }),
});
