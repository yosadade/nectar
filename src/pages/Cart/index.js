/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Divider, Card, Counter, Button} from '../../components';
import {
  ILPaprica,
  ICCancel,
  ILBanana,
  ILEggChickenRed,
  ILFuel,
  ILChicken,
  ILDietCoke,
} from '../../assets';

const data = [
  {
    id: 1,
    name: 'Bell Papper Red',
    desc: '1 kg, Price',
    price: 4.99,
    image: ILPaprica,
    detail:
      'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
  },
  {
    id: 2,
    name: 'Egg Chicken Red',
    desc: '4 pcs, Price',
    price: 1.99,
    image: ILEggChickenRed,
    detail:
      'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
  },
  {
    id: 3,
    name: 'Organic Banana',
    desc: '1 kg, Price',
    price: 3.99,
    image: ILBanana,
    detail:
      'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
  },
  {
    id: 4,
    name: 'Ginger',
    desc: '250 gm, Price',
    price: 2.99,
    image: ILFuel,
    detail:
      'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
  },
  {
    id: 5,
    name: 'Diet Coke',
    desc: '355 ml, Price',
    price: 1.99,
    image: ILDietCoke,
    detail:
      'Apple Are Nutritous. Apples May Be Good for weight loss. Apple may be good for your hearth as part of a healtful and varied diet.',
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const onMin = () => {
    count <= 1 ? setCount(count === 1) : setCount(count - 1);
  };

  const onAdd = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.page}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <Text style={styles.title}>My Cart</Text>
        <Divider marginHorizontal={0} />
        <SafeAreaView>
          <FlatList
            showsVerticalScrollIndicator={false}
            vertical
            data={data}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={item => {
              const {name, image, id, desc, price} = item.item;
              return (
                <View style={styles.container} key={id}>
                  <Image source={image} style={styles.image} />
                  <View style={styles.wrapperCounter}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                    <Counter
                      onPressMin={onMin}
                      onPressAdd={onAdd}
                      count={count}
                    />
                  </View>
                  <View style={styles.wrapperPrice}>
                    <TouchableOpacity style={styles.icon}>
                      <ICCancel />
                    </TouchableOpacity>
                    <Text style={styles.price}>${price}</Text>
                  </View>
                </View>
              );
            }}
            contentContainerStyle={{
              paddingHorizontal: 18,
              paddingBottom: 200,
            }}
          />
        </SafeAreaView>
      </View>
      <View style={styles.wrapperButton}>
        <Button type="cart" title="Go To Checkout" backgroundColor="#53B175" />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.5,
    // paddingHorizontal: 25,
    paddingVertical: 25,
    borderColor: '#E2E2E2',
  },
  image: {
    width: 70,
    height: 65,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  wrapperCounter: {},
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  desc: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
    marginBottom: 12,
  },
  wrapperPrice: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    left: 6,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#181725',
  },
  wrapperButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
});
