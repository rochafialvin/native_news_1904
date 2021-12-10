import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import AuthNavigation from './src/navigation/auth';

import Main from './src/screens';

function App() {
  const isSignedIn = false;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isSignedIn ? <Main /> : <AuthNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
