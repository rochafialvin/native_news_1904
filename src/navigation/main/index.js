import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackNavigation from '../home';
import ProfileStackNavigation from '../profile';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          // name yang kita gunakan pada component screen dibawah
          switch (route.name) {
            case 'HomeStack':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'ProfileStack':
              iconName = focused ? 'account' : 'account-outline';
              break;
          }

          return <Icon name={iconName} color={color} size={25} />;
        },
      })}>
      <Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{tabBarLabel: 'Home'}}
      />
      <Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{tabBarLabel: 'Profile'}}
      />
    </Navigator>
  );
}
