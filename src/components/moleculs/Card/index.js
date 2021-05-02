/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap, Button} from '../../atoms';
import {ICAdd} from '../../../assets';

const Card = ({
  image,
  name,
  desc,
  price,
  onPress,
  onAdd,
  type,
  backgroundColor,
}) => {
  if (type === 'explore') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.container(type, backgroundColor)}
        onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Gap height={15} />
        <Text style={[styles.name, {textAlign: 'center'}]}>{name}</Text>
        <Gap height={25} />
      </TouchableOpacity>
    );
  }
  if (type === 'groceries') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.container(type, backgroundColor)}
        onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Gap height={15} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container(type, backgroundColor)}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Gap height={15} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Gap height={25} />
      <View style={styles.wrapperPrice}>
        <Text style={styles.name}>{price}</Text>
        <Button
          type="add"
          backgroundColor="#53B175"
          icon={<ICAdd />}
          onPress={onAdd}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: (type, backgroundColor) => ({
    marginBottom: 15,
    paddingHorizontal: type === 'groceries' ? 0 : 10,
    paddingVertical: type === 'groceries' ? 17 : 15,
    paddingTop: type === 'groceries' ? 15 : 33,
    width: type === 'groceries' ? 237 : 173,
    alignItems: type === 'groceries' ? 'center' : null,
    flexDirection: type === 'groceries' ? 'row' : null,
    backgroundColor:
      type === 'groceries' || 'explore' ? backgroundColor : '#FFFFFF',
    borderRadius: 18,
    borderWidth: type === 'groceries' ? 0 : 1,
    borderColor: '#E2E2E2',
    marginRight: 15,
  }),
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 103,
    height: 62,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  desc: {
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
  },
  wrapperPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
