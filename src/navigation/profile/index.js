import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import ProfileScreen from '../../screens/profile';
import EditProfileScreen from '../../screens/editProfile';

export default function ProfileStackNavigation() {
  return (
    <Navigator initialRouteName="Profile">
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
