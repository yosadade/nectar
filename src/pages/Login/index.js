import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {ICCarrot} from '../../assets';
import {TextInput, Gap, Link, Button} from '../../components';

const Login = ({navigation}) => {
  const onLogin = () => {
    navigation.replace('MainApp');
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
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
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subTitle}>Enter your email and passwords</Text>
        <TextInput title="Email" />
        <Gap height={40} />
        <TextInput title="Password" icon secureTextEntry />
        <Gap height={20} />
        <Link title="Forgot Password?" color="#181725" textAlign="right" />
        <Gap height={30} />
        <Button title="Log In" backgroundColor="#53B175" onPress={onLogin} />
        <Gap height={25} />
        <View style={styles.wrapperLink}>
          <Text style={styles.link}>Don't have an account ? </Text>
          <Link title="Sign Up" color="#53B175" onPress={onSignUp} />
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
