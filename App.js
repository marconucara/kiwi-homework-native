import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Constants } from 'expo'
import { Provider } from 'react-redux';

import Phone from 'kiwi-homework-web/src/Phone/container';
import PhoneComponent from './components/Phone';

import configureStore from 'kiwi-homework-web/src/Phone/store';

const fetchHintsApi = async number => {

  return fetch(`${Constants.manifest.extra.apiEndPoint}${number}`)
    .then(response => response.json())
    .then(json => json.hints);
}

const store = configureStore(fetchHintsApi);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <StatusBar
      backgroundColor="blue"
      barStyle="dark-content"
    />
    <Provider store={store}>
      <Phone PhoneComponent={PhoneComponent} />
    </Provider>
  </View>
);

export default App;
