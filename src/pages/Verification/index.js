import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, TextInput, Button, Header, Link} from '../../components';
import {ICForward} from '../../assets';

const Verification = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <Gap height={65} />
        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Gap height={27} />
        <Text style={styles.subTitle}>Code</Text>
        <TextInput />
      </View>
      <View style={styles.footer}>
        <Link title="Resend Code" />
        <View style={styles.toast}>
          <Button type="toast" icon={<ICForward />} backgroundColor="#53B175" />
        </View>
      </View>
    </View>
  );
};

export default Verification;

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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toast: {
    marginLeft: 'auto',
  },
});
