import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, type, icon, backgroundColor}) => {
  if (type === 'add') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.container(backgroundColor, type)}>
        {icon}
      </TouchableOpacity>
    );
  }
  if (type === 'toast') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.container(backgroundColor, type)}>
        {icon}
        <Text />
      </TouchableOpacity>
    );
  }
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
    borderRadius: type === 'toast' ? 67 : type === 'add' ? 17 : 19,
    paddingVertical: 21,
    width: type === 'toast' ? 67 : type === 'add' ? 45 : 353,
    height: type === 'toast' ? 67 : type === 'add' ? 45 : null,
    paddingHorizontal: type === 'add' ? 0 : 35,
    alignItems: 'center',
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    justifyContent: type === 'icon' && 'toast' ? 'space-between' : 'center',
  }),
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF9FF',
    fontFamily: 'Poppins-Regular',
  },
});
