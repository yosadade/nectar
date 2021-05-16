import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Link = ({
  title,
  onPress,
  color = '#53B175',
  textAlign,
  fontSize = 14,
  fontFamily = 'Poppins-Regular',
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title(color, textAlign, fontSize, fontFamily)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (color, textAlign, fontSize, fontFamily) => ({
    fontSize: fontSize,
    fontFamily: fontFamily,
    color: color,
    textAlign: textAlign,
  }),
});
