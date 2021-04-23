import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Link from '../Link';

const Label = ({title, link, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Link title={link} color="#53B175" onPress={onPress} />
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
});
