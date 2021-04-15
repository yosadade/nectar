import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, OnBoarding, SignIn, Number, Verification} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Number"
        component={Number}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
