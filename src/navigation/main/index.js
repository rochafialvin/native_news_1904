import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeStackNavigation from '../home';
import ProfileStackNavigation from '../profile';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Navigator initialRouteName="HomeStack">
      <Screen name="HomeStack" component={HomeStackNavigation} />
      <Screen name="ProfileStack" component={ProfileStackNavigation} />
    </Navigator>
  );
}
