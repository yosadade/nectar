/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {TextInput, Card} from '../../components';
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

const Explore = ({navigation}) => {
  const [search, setSearch] = useState('');
  const products = [
    {
      id: 1,
      name: 'Frash Fruits & Vegetable',
      image: ILFreshFruits,
      backgroundColor: '#EEF7F1',
      product: [
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
      backgroundColor: '#FFF6ED',
      product: [
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
      backgroundColor: '#FDE8E4',
      product: [
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
      backgroundColor: '#F4EBF7',
      product: [
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
      backgroundColor: '#FEF8E5',
      product: [
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
      backgroundColor: '#EDF7FC',
      product: [
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
      id: 7,
      name: 'Frash Fruits & Vegetable',
      image: ILFreshFruits,
      backgroundColor: '#e8e6fa',
      product: [
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
      id: 8,
      name: 'Cooking Oil & Ghee',
      image: ILCookingOil,
      backgroundColor: '#F4EBF7',
      product: [
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
          id: 8,
          name: 'Cooking Oil',
          desc: '1 liter, price',
          price: '$1.99',
          image: ILCookingOil,
          detail:
            'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
        },
      ],
    },
  ];
  const filterData = products.filter(item => {
    return item.name.indexOf(search) >= 0;
  });

  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>Find product</Text>
      <TextInput
        type="search"
        placeholder="Search Store"
        onChangeText={value => setSearch(value)}
      />
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item, index) => item + index.toString()}
          numColumns={2}
          renderItem={item => {
            const {name, image, id, backgroundColor} = item.item;
            return (
              <Card
                key={id}
                type="explore"
                name={name}
                image={image}
                backgroundColor={backgroundColor}
                onPress={() => navigation.navigate('Product', item)}
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
