import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, type, icon, backgroundColor}) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.container(backgroundColor, type)}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <Text />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container(backgroundColor)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, type) => ({
    borderRadius: 19,
    paddingVertical: 21,
    width: 353,
    paddingHorizontal: 35,
    alignItems: 'center',
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    justifyContent: type === 'icon' ? 'space-between' : 'center',
  }),
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF9FF',
    fontFamily: 'Poppins-Regular',
  },
});
