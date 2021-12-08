import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FlexScreen from './src/screens/sandbox/flex';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';

const nativeStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <nativeStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Flex">
        <nativeStack.Screen name="Register" component={RegisterScreen} />
        <nativeStack.Screen name="Login" component={LoginScreen} />
        <nativeStack.Screen name="Flex" component={FlexScreen} />
      </nativeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
