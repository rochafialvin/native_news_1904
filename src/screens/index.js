import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeScreen from './home';
import DetailScreen from './detail';
import ProfileScreen from './profile';
import FavoriteScreen from './favorite';

function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

export default function Main() {
  return (
    <Navigator initialRouteName="HomeStack">
      <Screen name="HomeStack" component={HomeStackNavigation} />
      <Screen name="ProfileStack" component={ProfileStackNavigation} />
    </Navigator>
  );
}
