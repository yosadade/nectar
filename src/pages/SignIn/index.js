import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {ILSignIn, ICGoogle, ICFacebook} from '../../assets';
import {TextInput, Button, Gap} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Image source={ILSignIn} />
      <View style={styles.content}>
        <Text style={styles.title}>Get Your Groceries</Text>
        <Text style={styles.title}>With Nectar</Text>
        <TextInput />
        <Text style={styles.titleDivider}>Or Connect with social media</Text>
        <Button
          type="icon"
          title="Continue with Google"
          backgroundColor="#ed857d"
          icon={<ICGoogle />}
        />
        <Gap height={20} />
        <Button
          type="icon"
          title="Continue with Facebook"
          backgroundColor="#5383EC"
          icon={<ICFacebook />}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingBottom: 90,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#030303',
  },
  titleDivider: {
    paddingVertical: 40,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#828282',
    textAlign: 'center',
  },
});
