import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import InitialNavigation from './src/navigation/initial';

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <InitialNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
