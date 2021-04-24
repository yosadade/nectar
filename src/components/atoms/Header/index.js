import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {ICBack, ICDownload} from '../../../assets';

const Header = ({
  onPress,
  download,
  onPressDownload,
  backgroundColor = '#FFFFFF',
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <TouchableOpacity
        style={styles.back}
        onPress={onPress}
        activeOpacity={0.5}>
        <ICBack />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressDownload}>
        {download && <ICDownload />}
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
    padding: 25,
  }),
});
