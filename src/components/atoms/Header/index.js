import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {ICBack, ICDownload, ICSetting} from '../../../assets';

const Header = ({
  onPress,
  download,
  setting,
  onPressDownload,
  backgroundColor = '#FFFFFF',
  title,
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <TouchableOpacity
        style={styles.back}
        onPress={onPress}
        activeOpacity={0.5}>
        <ICBack />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressDownload}>
        {download && <ICDownload />}
        {setting && <ICSetting />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  }),
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
});
