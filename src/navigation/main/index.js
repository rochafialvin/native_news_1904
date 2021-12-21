import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import SubmainNavigation from '../submain';
import DetailScreen from '../../screens/detail';

export default function MainNavigation() {
  return (
    <Navigator>
      <Screen
        name="SubmainNavigation"
        component={SubmainNavigation}
        options={{headerShown: false}}
      />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
}
