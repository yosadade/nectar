import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  ICShop,
  ICShopActive,
  ICExplore,
  ICExploreActive,
  ICCart,
  ICCartActive,
  ICFavouriteActive,
  ICFavourite,
  ICAccountActive,
  ICAccount,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Shop':
      return focus ? <ICShopActive /> : <ICShop />;
    case 'Explore':
      return focus ? <ICExploreActive /> : <ICExplore />;
    case 'Cart':
      return focus ? <ICCartActive /> : <ICCart />;
    case 'Favourite':
      return focus ? <ICFavouriteActive /> : <ICFavourite />;
    case 'Account':
      return focus ? <ICAccountActive /> : <ICAccount />;
    default:
      break;
  }
  return <ICShop />;
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
