import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {ICCancel, ICDown, ICNext} from '../../../assets';
import {Label, Divider, Link, Button} from '../../atoms';

const CustomModal = ({isVisible, onBackdropPress}) => {
  return (
    <Modal
      style={styles.container}
      useNativeDrive
      animationOut="slideOutDown"
      animationOutTiming={600}
      animationIn="slideInUp"
      animationInTiming={600}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.title}>Checkout</Text>
          <TouchableOpacity>
            <ICCancel />
          </TouchableOpacity>
        </View>
        <Label
          type="detail"
          title="Delivery"
          icon={<ICNext />}
          checkout="Select Method"
        />
        <Divider />
        <Label
          type="detail"
          title="Payment"
          icon={<ICNext />}
          checkout="Select Method"
        />
        <Divider />
        <Label
          type="detail"
          title="Promo Code"
          icon={<ICNext />}
          checkout="Pick Discount"
        />
        <Divider />
        <Label
          type="detail"
          title="Total Cost"
          icon={<ICNext />}
          checkout="$13.97"
        />
        <Divider />
        <View style={styles.wrapperTerms}>
          <Text style={styles.link}>By placing an order your agree to our</Text>
          <View style={styles.wrapperLink}>
            <Link title="Terms " color="#181725" />
            <Text style={styles.link}>And</Text>
            <Link title=" Conditions" color="#181725" />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Place Order"
            backgroundColor="#53b175"
            //   onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginTop: 'auto',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    height: '60%',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    marginBottom: 20,
    paddingHorizontal: 25,
    borderColor: '#E2E2E2',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#181725',
  },
  wrapperTerms: {
    paddingHorizontal: 25,
  },
  wrapperLink: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  link: {
    fontSize: 14,
    color: '#7C7C7C',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});
