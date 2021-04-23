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
} from '../../assets';
import {TextInput, Gap, Label, Card} from '../../components';

const Shop = () => {
  const exclusiveOffer = [
    {
      id: 1,
      name: 'Organic Bananas',
      desc: '7 pcs, Priceg',
      price: '$4.99',
      image: ILBanana,
    },
    {
      id: 2,
      name: 'Red Apple',
      desc: '1 kg, priceg',
      price: '$3.99',
      image: ILApple,
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
      name: 'Bell Pepper Red',
      desc: '1 kg, Priceg',
      price: '$4.99',
      image: ILPaprica,
    },
    {
      id: 4,
      name: 'Ginger',
      desc: '250 gr, priceg',
      price: '$3.99',
      image: ILFuel,
    },
  ];
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
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
            renderItem={item => {
              const {name, desc, price, image} = item.item;
              return (
                <Card name={name} desc={desc} price={price} image={image} />
              );
            }}
            contentContainerStyle={{paddingHorizontal: 18}}
          />
        </SafeAreaView>
        <Gap height={20} />
        <Label title="Best Selling" link="See all" />
        <Gap height={20} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={bestSelling}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={item => {
              const {name, desc, price, image} = item.item;
              return (
                <Card name={name} desc={desc} price={price} image={image} />
              );
            }}
            contentContainerStyle={{paddingHorizontal: 18}}
          />
        </SafeAreaView>
        <Gap height={20} />
        <Label title="Groceries" link="See all" />
        <Gap height={20} />
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
