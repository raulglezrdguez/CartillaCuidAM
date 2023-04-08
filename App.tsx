import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PreferencesProvider} from './src/context/preferences';

import Main from './src/Main';

const App = () => {
  return (
    <PreferencesProvider>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </PreferencesProvider>
  );
};

export default App;
