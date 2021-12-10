import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import AuthNavigation from './src/navigation/auth';
import MainNavigation from './src/navigation/main';

function App() {
  const isSignedIn = true;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isSignedIn ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
