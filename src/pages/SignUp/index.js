import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {ICCarrot} from '../../assets';
import {TextInput, Gap, Link, Button} from '../../components';

const Login = () => {
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={styles.icon}>
          <ICCarrot />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Enter your credential to continue</Text>
        <TextInput title="Username" />
        <Gap height={40} />
        <TextInput title="Email" />
        <Gap height={20} />
        <TextInput title="Password" icon secureTextEntry />
        <Gap height={20} />
        <View style={styles.wrapperTerms}>
          <Text style={styles.titleTerms}>By Continue you agree to our </Text>
          <Link title="Terms of Service" color="#53B175" />
        </View>
        <View style={styles.wrapperTerms}>
          <Text style={styles.titleTerms}>And </Text>
          <Link title="Privacy Policy" color="#53B175" />
        </View>
        <Gap height={30} />
        <Button title="Sign Up" backgroundColor="#53B175" />
        <Gap height={25} />
        <View style={styles.wrapperLink}>
          <Text style={styles.link}>Alredy have an account ? </Text>
          <Link title="Sign In" color="#53B175" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFFFFF',
  },
  scrollview: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    paddingTop: 28,
    paddingBottom: 38,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: '#181725',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 40,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
  },
  wrapperTerms: {
    flexDirection: 'row',
  },
  titleTerms: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#7C7C7C',
  },
  wrapperLink: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  link: {
    fontSize: 14,
    color: '#181725',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
