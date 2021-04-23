import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap, Button} from '../../atoms';
import {ICAdd} from '../../../assets';

const Card = ({image, name, desc, price, onPress, onAdd}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
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
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingTop: 33,
    width: 173,
    // justifyContent: 'space-between',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: 15,
  },
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
