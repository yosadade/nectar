import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Link from '../Link';
import {ICStar} from '../../../assets';

const Label = ({
  title,
  link,
  onPress,
  type,
  icon,
  nutritions,
  review,
  productDetail,
}) => {
  if (type === 'detail') {
    return (
      <View style={styles.container}>
        <Text style={styles.title(type)}>{title}</Text>
        {nutritions && (
          <View style={styles.wrapperRight}>
            <View style={styles.nutritions}>
              <Text style={styles.titleNutritions}>{nutritions}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
          </View>
        )}
        {review && (
          <View style={styles.wrapperRight}>
            <View style={styles.star}>
              <ICStar />
              <ICStar />
              <ICStar />
              <ICStar />
              <ICStar />
            </View>
            <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
          </View>
        )}
        {productDetail && (
          <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
        )}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title(type)}>{title}</Text>
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
    paddingHorizontal: 24,
  },
  wrapperRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: type => ({
    fontSize: type === 'detail' ? 16 : 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  }),
  nutritions: {
    borderRadius: 5,
    marginRight: 20,
    padding: 5,
    backgroundColor: '#EBEBEB',
  },
  titleNutritions: {
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});
