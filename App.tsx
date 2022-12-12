import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';

import {RootRouter} from '@app/routers/RootRouter';
import {persistor, store} from '@app/store';
const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <NavigationContainer>
            <RootRouter />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
