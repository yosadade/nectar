import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as TextInputRN,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ICFlag, ICEye} from '../../../assets';

const TextInput = ({type, title, secureTextEntry, icon, onPress}) => {
  const [iconSecureText, setIconSecureText] = useState(false);

  if (type === 'flag') {
    return (
      <View style={styles.container}>
        <View style={styles.icon(type)}>
          <ICFlag />
          <Text style={styles.title(type)}>+880</Text>
        </View>
        <TextInputRN
          keyboardType="Numeric"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: -20,
            paddingLeft: 98,
            borderBottomWidth: 1,
            borderColor: '#E2E2E2',
            padding: 12,
            paddingRight: 34,
            fontSize: 18,
            color: '#030303',
            fontFamily: 'Poppins-Medium',
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title(type)}>{title}</Text>
      <TextInputRN
        secureTextEntry={iconSecureText ? secureTextEntry : null}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: type === 'flag' ? -20 : -10,
          paddingLeft: type === 'flag' ? 98 : 0,
          borderBottomWidth: 1,
          borderColor: '#E2E2E2',
          padding: 12,
          paddingRight: 34,
          fontSize: 18,
          color: type === 'flag' ? '#030303' : '#181725',
          fontFamily: type === 'flag' ? 'Poppins-Medium' : 'Poppins-Regular',
        }}
      />
      {icon && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.icon(type)}
          onPress={() => setIconSecureText(!iconSecureText)}>
          <ICEye />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {},
  icon: type => ({
    top: type === 'flag' ? 20.9 : -35,
    marginRight: 12,
    marginLeft: type === 'flag' ? '' : 'auto',
    flexDirection: 'row',
  }),
  title: type => ({
    fontSize: type === 'flag' ? 18 : 16,
    marginLeft: type === 'flag' ? 12 : 0,
    color: type === 'flag' ? '#030303' : '#7C7C7C',
    fontFamily: type === 'flag' ? 'Poppins-Medium' : 'Poppins-Regular',
  }),
});
