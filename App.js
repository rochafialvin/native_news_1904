import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

import FlexScreen from './src/screens/sandbox/flex';
import LoginScreen from './src/screens/login';
import LandingScreen from './src/screens/landing';
import RegisterScreen from './src/screens/register';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Landing">
          <Screen name="Register" component={RegisterScreen} />
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Landing" component={LandingScreen} />
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
