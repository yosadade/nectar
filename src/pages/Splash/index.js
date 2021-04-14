import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {ICSplash} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="light-content"
        // hidden={true}
        backgroundColor="#53B175"
      />
      <ICSplash />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175',
  },
});
