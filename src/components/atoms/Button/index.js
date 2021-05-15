/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({onPress, title, type, icon, backgroundColor, total}) => {
  if (type === 'cart') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.wrapperCart(backgroundColor, total)}>
        {total && <Text style={{color: 'transparent'}}>test</Text>}
        <Text style={styles.title}>{title}</Text>
        {total && (
          <View style={styles.wrapperPrice}>
            <Text style={styles.price}>${total}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
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
    justifyContent:
      type === 'icon' && 'toast' && 'cart' ? 'space-between' : 'center',
  }),
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF9FF',
    fontFamily: 'Poppins-Regular',
  },
  wrapperCart: (backgroundColor, total) => ({
    borderRadius: 19,
    paddingVertical: 21,
    width: 353,
    height: null,
    paddingHorizontal: 35,
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    justifyContent: total ? 'space-between' : 'center',
    alignItems: 'center',
  }),
  wrapperPrice: {
    backgroundColor: '#489E67',
    borderRadius: 5,
    marginLeft: 20,
    padding: 0.5,
  },
  price: {
    fontSize: 9,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: 'center',
    color: '#FFF9FF',
    fontFamily: 'Poppins-Regular',
  },
});
