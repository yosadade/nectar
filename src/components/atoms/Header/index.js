import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICBack} from '../../../assets';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={onPress}
        activeOpacity={0.5}>
        <ICBack />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
