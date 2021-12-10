import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../../screens/auth/register';
import LoginScreen from '../../screens/auth/login';
import LandingScreen from '../../screens/auth/landing';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Landing">
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Landing" component={LandingScreen} />
    </Navigator>
  );
}
