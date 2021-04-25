import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header, Counter, Gap, Divider} from '../../components';
import {ICLove} from '../../assets';

const ProductDetail = ({navigation, route}) => {
  const [count, setCount] = useState(1);
  const {name, desc, image, price} = route.params;
  const onBack = () => {
    navigation.goBack();
  };
  const onMin = () => {
    count <= 1 ? setCount(count === 1) : setCount(count - 1);
  };

  const onAdd = () => {
    setCount(count + 1);
  };
  const onDownload = () => {};
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
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
        <Gap height={20} />
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
          <Gap height={20} />
          <View style={styles.wrapperCounter}>
            <Counter onPressMin={onMin} onPressAdd={onAdd} count={count} />
            <Text style={styles.name}>{price}</Text>
          </View>
          <Gap height={20} />
          <Divider />
          <Gap height={20} />
        </View>
      </View>
    </ScrollView>
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
    paddingHorizontal: 25,
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
  wrapperCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
