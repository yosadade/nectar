/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Header, Card} from '../../components';

const Product = ({navigation, route}) => {
  const {product} = route.params.item;

  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header
        setting
        backgroundColor="#FFFFFF"
        title="Find Product"
        onPress={() => navigation.goBack()}
      />
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={product}
          keyExtractor={(item, index) => item + index.toString()}
          numColumns={2}
          renderItem={item => {
            const {name, desc, price, image, id} = item.item;
            console.log(name, 'name');
            return (
              <Card
                key={id}
                name={name}
                desc={desc}
                price={price}
                image={image}
                onPress={() => navigation.navigate('ProductDetail', item.item)}
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

export default Product;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
