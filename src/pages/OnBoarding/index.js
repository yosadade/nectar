import React from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {ILOnBoarding, ICCarrotWhite} from '../../assets';
import {Gap, Button} from '../../components';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <ImageBackground source={ILOnBoarding} style={styles.image}>
        <View style={styles.content}>
          <ICCarrotWhite />
          <Gap height={15} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Gap height={10} />
          <Text style={styles.subTitle}>
            Ger your groceries in as fast as one hour
          </Text>
          <Gap height={40} />
          <View style={styles.button}>
            <Button
              title="Get Started"
              backgroundColor="#53b175"
              onPress={() => navigation.replace('Login')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  page: {
    // flex: 1,
  },
  image: {
    height: '100%',
    width: '101%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingBottom: 90,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  title: {
    fontSize: 39,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  subTitle: {
    fontSize: 15,
    color: '#FCFCFC',
    fontFamily: 'Poppins-Light',
  },
  button: {
    width: '100%',
  },
});
