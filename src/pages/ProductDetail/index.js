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
import {Header, Counter, Gap, Divider, Label, Button} from '../../components';
import {ICLove, ICDown, ICNext, ICBack, ICFavouriteRed} from '../../assets';

const ProductDetail = ({navigation, route}) => {
  const [count, setCount] = useState(1);
  const [dropDown, setDropDown] = useState(false);
  const [iconDropDown, setIconDropDown] = useState(<ICNext />);
  const [favourite, setFavourite] = useState(false);
  const [iconFavourite, setIconFavourite] = useState(<ICLove />);

  const {name, desc, image, price, detail} = route.params;
  const onBack = () => {
    navigation.goBack();
  };

  const onFavourite = () => {
    setFavourite(!favourite);
    setIconFavourite(favourite ? <ICFavouriteRed /> : <ICLove />);
  };

  const onMin = () => {
    count <= 1 ? setCount(count === 1) : setCount(count - 1);
  };

  const onAdd = () => {
    setCount(count + 1);
  };
  const onDownload = () => {};

  const onDetail = () => {
    console.log(dropDown);
    setDropDown(!dropDown);
    setIconDropDown(dropDown ? <ICNext /> : <ICDown />);
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.header}>
            <View style={styles.headerDetail}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>{desc}</Text>
            </View>
            <TouchableOpacity onPress={onFavourite}>
              {iconFavourite}
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <View style={styles.wrapperCounter}>
            <Counter onPressMin={onMin} onPressAdd={onAdd} count={count} />
            <Text style={styles.name}>{price}</Text>
          </View>
          <Divider />
          <Label
            type="detail"
            title="Product Detail"
            icon={iconDropDown}
            onPress={onDetail}
          />
          {dropDown && <Text style={styles.titleDetail}>{detail}</Text>}
          <Divider />
          <Label
            type="detail"
            title="Nutritions"
            nutritions="100gr"
            icon={iconDropDown}
          />
          <Divider />
          <Label type="detail" title="Review" review icon={iconDropDown} />
          {/* <Gap height={20} /> */}
        </View>
      </ScrollView>
      <View style={styles.wrapperButton}>
        <Button title="Add To Basket" backgroundColor="#53B175" />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  wrapperImage: {
    backgroundColor: '#F2F3F2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: '#F2F3F2',
  },
  detail: {
    // paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  headerDetail: {
    justifyContent: 'space-between',
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
    paddingHorizontal: 25,
  },
  titleDetail: {
    fontSize: 13,
    marginTop: 10,
    paddingHorizontal: 25,
    fontFamily: 'Poppins-Light',
    color: '#7C7C7C',
  },
  wrapperButton: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: 'transparent',
  },
});
