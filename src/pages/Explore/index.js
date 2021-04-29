/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TextInput, Gap, Card} from '../../components';
import {
  ILFreshFruits,
  ILBanana,
  ILApple,
  ILCookingOil,
  ILMeatFish,
  ILBakerySnack,
  ILEggChickenRed,
  ILEggChickenWhite,
  ILEggPasta,
  ILEggNoodles2,
  ILMayonnaiseEggless,
  ILBaverage,
} from '../../assets';

const Explore = () => {
  const products = [
    {
      id: 1,
      name: 'Frash Fruits & Vegetable',
      image: ILFreshFruits,
      backgroundColor: '#53B175',
      Product: [
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
      ],
    },
    {
      id: 2,
      name: 'Cooking Oil & Ghee',
      image: ILCookingOil,
      backgroundColor: '#F8A44C',
      Product: [
        {
          id: 1,
          name: 'Cooking Oil',
          desc: '1 liter, Price',
          price: '$1.99',
          image: ILCookingOil,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 2,
          name: 'Cooking Oil',
          desc: '1 liter, price',
          price: '$1.99',
          image: ILCookingOil,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
    {
      id: 3,
      name: 'Meat & Fish',
      image: ILMeatFish,
      backgroundColor: '#F7A593',
      Product: [
        {
          id: 1,
          name: 'Meal & Fish',
          desc: '1 kg, Price',
          price: '$1.99',
          image: ILMeatFish,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 2,
          name: 'Meal & Fish',
          desc: '1 kg, price',
          price: '$1.99',
          image: ILMeatFish,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
    {
      id: 4,
      name: 'Bakery & Snacks',
      image: ILBakerySnack,
      backgroundColor: '#D3B0E0',
      Product: [
        {
          id: 1,
          name: 'Meal & Fish',
          desc: '1 kg, Price',
          price: '$1.99',
          image: ILBakerySnack,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 2,
          name: 'Meal & Fish',
          desc: '1 kg, price',
          price: '$1.99',
          image: ILBakerySnack,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
    {
      id: 5,
      name: 'Dairy & Eggs',
      image: ILBakerySnack,
      backgroundColor: '#FDE598',
      Product: [
        {
          id: 1,
          name: 'Egg Chicken Red',
          desc: '4 pcs, Price',
          price: '$1.99',
          image: ILEggChickenRed,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 2,
          name: 'Egg Chicken White',
          desc: '4 pcs, price',
          price: '$1.50',
          image: ILEggChickenWhite,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 3,
          name: 'Egg Pasta',
          desc: '30 gm, Price',
          price: '$15.99',
          image: ILEggPasta,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 4,
          name: 'Egg Noodles',
          desc: '21, price',
          price: '$15.99',
          image: ILEggChickenWhite,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 5,
          name: 'Mayonnaise Eggless',
          desc: '250 gm, Price',
          price: '$15.99',
          image: ILMayonnaiseEggless,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 6,
          name: 'Egg Noodles',
          desc: '21, price',
          price: '$15.99',
          image: ILEggNoodles2,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
    {
      id: 6,
      name: 'Baverages',
      image: ILBaverage,
      backgroundColor: '#B7DFF5',
      Product: [
        {
          id: 1,
          name: 'Meal & Fish',
          desc: '1 kg, Price',
          price: '$1.99',
          image: ILBakerySnack,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
        {
          id: 2,
          name: 'Meal & Fish',
          desc: '1 kg, price',
          price: '$1.99',
          image: ILBakerySnack,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
  ];
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <Text style={styles.title}>Find Product</Text>
        <TextInput type="search" placeholder="Search Store" />
        <Gap height={20} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item, index) => item + index.toString()}
            numColumns={2}
            renderItem={item => {
              const {name, image, id} = item.item;
              return (
                <Card
                  key={id}
                  name={name}
                  image={image}
                  // onPress={() => onBestSelling(item)}
                />
              );
            }}
            contentContainerStyle={{
              paddingHorizontal: 18,
              alignItems: 'flex-start',
            }}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
  },
  title: {
    paddingHorizontal: 25,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
});
