import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as TextInputRN,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ICFlag, ICEye, ICSearch} from '../../../assets';

const TextInput = ({
  type,
  title,
  secureTextEntry,
  icon,
  onPress,
  value,
  onChangeText,
  placeholder,
}) => {
  const [iconSecureText, setIconSecureText] = useState(false);

  if (type === 'flag') {
    return (
      <View style={styles.container}>
        <View style={styles.icon(type)}>
          <ICFlag />
          <Text style={styles.title(type)}>+880</Text>
        </View>
        <TextInputRN
          placeholder={placeholder}
          keyboardType="Numeric"
          value={value}
          onChangeText={onChangeText}
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
  if (type === 'search') {
    return (
      <View style={styles.container}>
        <Text style={styles.title(type)}>{title}</Text>
        <TextInputRN
          secureTextEntry={iconSecureText ? secureTextEntry : null}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: -10,
            padding: 12,
            borderRadius: 15,
            fontSize: 14,
            backgroundColor: '#F2F3F2',
            color: '#7C7C7C',
            fontFamily: 'Poppins-Light',
          }}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.icon(type)}
          onPress={() => setIconSecureText(!iconSecureText)}>
          <ICSearch />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title(type)}>{title}</Text>
      <TextInputRN
        secureTextEntry={iconSecureText ? secureTextEntry : null}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#FFFFFF',
          marginTop: type === 'flag' ? -20 : -10,
          paddingLeft: type === 'flag' ? 98 : 0,
          borderBottomWidth: type === 'search' ? 0 : 1,
          borderColor: '#E2E2E2',
          padding: 12,
          paddingRight: 34,
          fontSize: 14,
          color: type === 'flag' ? '#030303' : '#181725',
          fontFamily: type === 'flag' ? 'Poppins-Medium' : 'Poppins-Light',
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
  container: {
    paddingHorizontal: 15,
  },
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
