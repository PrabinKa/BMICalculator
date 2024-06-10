import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {RootNavigator} from '~/navigation';
import ContextProvider from '~/context/GlobalContext';

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <StatusBar backgroundColor={'#16375F'} />
      <RootNavigator />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
