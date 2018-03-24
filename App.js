import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Weather } from './containers/weather';
import { store } from './containers/store';
import { Provider } from 'react-redux'; //Gives us access to 


export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <Weather />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
