import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackNavigation from '../home';
import ProfileStackNavigation from '../profile';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Navigator initialRouteName="HomeStack">
      <Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={'#ffffff'}
              size={25}
            />
          ),
        }}
      />
      <Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              color={'#ffffff'}
              size={25}
            />
          ),
        }}
      />
    </Navigator>
  );
}
