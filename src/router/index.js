import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  OnBoarding,
  SignIn,
  Number,
  Verification,
  Login,
  SignUp,
} from '../pages';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Number"
        component={Number}
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
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// const MainApp = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name=""
//         component={}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   )
// }

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
