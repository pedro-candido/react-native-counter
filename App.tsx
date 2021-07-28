import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux'

import { Button } from './src/components'

import { store } from './src/store/configureStore.store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>
          Bem vindo ao CountApp
        </Text>
        <Button text="Start" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(144, 34, 255)',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
  }
});