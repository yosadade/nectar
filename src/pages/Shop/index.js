/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  ICCarrotMini,
  ICLocation,
  ILBanner,
  ILBanana,
  ILApple,
  ILPaprica,
  ILFuel,
  ILBeef,
  ILChicken,
  ILPulses,
  ILRice,
} from '../../assets';
import {TextInput, Gap, Label, Card} from '../../components';

const Shop = ({navigation}) => {
  const exclusiveOffer = [
    {
      id: 1,
      name: 'Organic Bananas',
      desc: '7 pcs, Priceg',
      price: '$4.99',
      image: ILBanana,
      detail:
        'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
    },
    {
      id: 2,
      name: 'Red Apple',
      desc: '1 kg, priceg',
      price: '$3.99',
      image: ILApple,
      detail:
        'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
    },
    {
      id: 3,
      name: 'Organic Bananas',
      desc: '7 pcs, Priceg',
      price: '$4.99',
      image: ILBanana,
    },
    {
      id: 4,
      name: 'Red Apple',
      desc: '1 kg, priceg',
      price: '$3.99',
      image: ILApple,
    },
  ];

  const bestSelling = [
    {
      id: 1,
      name: 'Bell Pepper Red',
      desc: '1 kg, Priceg',
      price: '$4.99',
      image: ILPaprica,
    },
    {
      id: 2,
      name: 'Ginger',
      desc: '250 gr, priceg',
      price: '$3.99',
      image: ILFuel,
    },
    {
      id: 3,
      name: 'Beff Bone',
      desc: '1 kg, Priceg',
      price: '$4.99',
      image: ILBeef,
    },
    {
      id: 4,
      name: 'Broiller Chicken',
      desc: '1kg, priceg',
      price: '$3.99',
      image: ILChicken,
    },
  ];

  const groceries = [
    {
      id: 1,
      name: 'Pulses',
      backgroundColor: '#FEF1E4',
      image: ILPulses,
    },
    {
      id: 2,
      name: 'Rice',
      backgroundColor: '#E5F3EA',
      image: ILRice,
    },
  ];

  const onDetail = item => {
    console.log(item.item);
    navigation.navigate('ProductDetail', item.item);
  };

  const onBestSelling = item => {
    console.log(item.item);
    navigation.navigate('ProductDetail', item.item);
  };

  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.icon}>
          <ICCarrotMini />
        </View>
        <View style={styles.location}>
          <ICLocation />
          <Text style={styles.titleLocation}>Dhaka, Banassre</Text>
        </View>
        <TextInput type="search" placeholder="Search Store" />
        <Gap height={10} />
        <Image source={ILBanner} style={styles.image} />
        <Gap height={20} />
        <Label title="Exclusive Offer" link="See all" />
        <Gap height={20} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={exclusiveOffer}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={offer => {
              const {name, desc, price, image, id} = offer.item;
              return (
                <Card
                  key={id}
                  name={name}
                  desc={desc}
                  price={price}
                  image={image}
                  onPress={() => onDetail(offer)}
                />
              );
            }}
            contentContainerStyle={{paddingHorizontal: 18}}
          />
        </SafeAreaView>
        <Gap height={5} />
        <Label title="Best Selling" link="See all" />
        <Gap height={20} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={bestSelling}
            keyExtractor={(item, index) => item + index.toString()}
            numColumns={2}
            renderItem={item => {
              const {name, desc, price, image, id} = item.item;
              return (
                <Card
                  key={id}
                  name={name}
                  desc={desc}
                  price={price}
                  image={image}
                  onPress={() => onBestSelling(item)}
                />
              );
            }}
            contentContainerStyle={{
              paddingHorizontal: 18,
              alignItems: 'flex-start',
            }}
          />
        </SafeAreaView>
        <Gap height={5} />
        <Label title="Groceries" link="See all" />
        <Gap height={20} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={groceries}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={item => {
              const {name, backgroundColor, image, id} = item.item;
              return (
                <Card
                  key={id}
                  type="groceries"
                  name={name}
                  backgroundColor={backgroundColor}
                  image={image}
                />
              );
            }}
            contentContainerStyle={{paddingHorizontal: 18}}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingHorizontal: 0,
  },
  icon: {
    paddingVertical: 0,
    alignSelf: 'center',
  },
  location: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  titleLocation: {
    fontSize: 18,
    marginLeft: 8,
    top: 3,
    fontFamily: 'Poppins-Regular',
    color: '#4C4F4D',
  },
  image: {
    width: '100%',
    height: 115,
    resizeMode: 'contain',
  },
});
