import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILLocation} from '../../assets';
import {Gap, Button, TextInput} from '../../components';

const SelectLocation = ({navigation}) => {
  const onsubmit = () => {
    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <View>
        <Image source={ILLocation} style={styles.image} />
        <Gap height={40} />
        <Text style={styles.title}>Select Your Location</Text>
        <Gap height={15} />
        <Text style={styles.subTitle}>
          Switch on your location to stay in tune with
        </Text>
        <Text style={styles.subTitle}>what's happening in your area</Text>
      </View>
      <View>
        <TextInput title="Your Zone" placeholder="Type of your zone" icon />
        <Gap height={30} />
        <TextInput title="Your Area" placeholder="Type of your area" icon />
        <Gap height={40} />
        <Button title="Submit" backgroundColor="#53B175" onPress={onsubmit} />
      </View>
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 64,
    paddingHorizontal: 25,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#7C7C7C',
    textAlign: 'center',
  },
});
