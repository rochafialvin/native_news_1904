import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './src/store';

import AuthNavigation from './src/navigation/auth';
import MainNavigation from './src/navigation/main';

function App() {
  const isSignedIn = true;

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {isSignedIn ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
