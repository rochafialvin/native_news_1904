import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import Auth from './src/screens/auth';
import Main from './src/screens';

function App() {
  const isSignedIn = true;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isSignedIn ? <Main /> : <Auth />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
