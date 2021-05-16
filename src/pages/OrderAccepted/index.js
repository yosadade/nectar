import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {ILOrderAccepted} from '../../assets';
import {Gap, Button, Link} from '../../components';

const OrderAccepted = () => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image source={ILOrderAccepted} style={styles.image} />
      <Gap height={60} />
      <Text style={styles.title}>Your Order has been</Text>
      <Text style={styles.title}>accepted</Text>
      <Gap height={20} />
      <Text style={styles.subTitle}>Your items has been placed and is on</Text>
      <Text style={styles.subTitle}>it's way to being processed</Text>
      <Gap height={80} />
      <Button
        title="Track Order"
        backgroundColor="#53b175"
        // onPress={onPress}
      />
      <Gap height={20} />
      <Link
        title="Back to home"
        color="#181725"
        fontSize={16}
        fontFamily="Poppins-SemiBold"
      />
    </View>
  );
};

export default OrderAccepted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingBottom: 40,
  },
  image: {
    resizeMode: 'contain',
    right: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#7C7C7C',
  },
});
