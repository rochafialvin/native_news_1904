import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from './src/screens/register';
import Login from './src/screens/login';

const nativeStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <nativeStack.Navigator>
        <nativeStack.Screen name="Login" component={Login} />
        <nativeStack.Screen name="Register" component={Register} />
      </nativeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
