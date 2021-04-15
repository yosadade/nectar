import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, TextInput, Button, Header} from '../../components';
import {ICForward} from '../../assets';

const Number = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <Gap height={65} />
        <Text style={styles.title}>Enter your mobile number</Text>
        <Gap height={27} />
        <Text style={styles.subTitle}>Mobile Number</Text>
        <TextInput />
      </View>
      <View style={styles.toast}>
        <Button
          type="toast"
          icon={<ICForward />}
          backgroundColor="#53B175"
          onPress={() => navigation.navigate('Verification')}
        />
      </View>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 25,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
  },
  toast: {
    marginLeft: 'auto',
  },
});
