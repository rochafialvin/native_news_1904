import React, {useEffect} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionsAndroid} from 'react-native';

import InitialNavigation from './src/navigation/initial';

function App() {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
  }, []);

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
