import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import HomeScreen from '../../screens/home';

export default function HomeStackNavigation() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
