/**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow
     */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export const ListaScreens = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register: {screen: Register},
},
  { initialRoutename: 'Login' },
)

const AppContainer = createAppContainer(ListaScreens);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

