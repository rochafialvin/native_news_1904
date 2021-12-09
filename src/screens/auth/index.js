import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './login';
import LandingScreen from './landing';
import RegisterScreen from './register';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Auth() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Landing">
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Landing" component={LandingScreen} />
    </Navigator>
  );
}
