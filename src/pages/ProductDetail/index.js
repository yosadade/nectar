import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components';
import {ICLove} from '../../assets';

const ProductDetail = ({navigation, route}) => {
  const {name, desc, image, price} = route.params;
  const onBack = () => {
    navigation.goBack();
  };
  const onDownload = () => {};
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F3F2" />
      <Header
        download
        backgroundColor="#F2F3F2"
        onPress={onBack}
        onPressDownload={onDownload}
      />
      <View style={styles.wrapperImage}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detail}>
        <View style={styles.headerDetail}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
          <TouchableOpacity>
            <ICLove />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapperImage: {
    backgroundColor: '#F2F3F2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 320,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: '#F2F3F2',
  },
  detail: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  headerDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  desc: {
    fontSize: 16,
    fontFamily: 'Poppins-light',
    color: '#7C7C7C',
  },
});
