import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import ProfileScreen from '../../screens/profile';
import FavoriteScreen from '../../screens/profile';

export default function ProfileStackNavigation() {
  return (
    <Navigator initialRouteName="Profile">
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Screen name="Favorite" component={FavoriteScreen} />
    </Navigator>
  );
}
