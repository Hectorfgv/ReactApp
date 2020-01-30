/**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow
     */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Formulari from './screens/Formulari';
import Resultat from './screens/Resultat';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export const ListaScreens = createStackNavigator({
  Login: { screen: Formulari },
  Home: { screen: Resultat },
  Register: {screen: Registro},
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

