/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet,View,FlatList,Text,TextInput,TouchableOpacity} from 'react-native';

//import calcularLletraDNI from './esborrar';

export default class Login extends Component {
  constructor(props) {
    super(props);
        this.state={
          
    };
  }
    
    render() {
      return (
        <View style={styles.fonsTot}>
          <View>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='User'
              placeholderTextColor='#0000FF'
              
              maxLength = {12}
              keyboardType={"number-pad"}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Password'
              placeholderTextColor='#0000FF'
              
              
              >
            </TextInput>
          </View>
          <View>
            
            <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('Home'))}>
                    <Text style = {styles.textBoto}>Home</Text>       
            </TouchableOpacity> 
            <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('Register'))}>
                    <Text style = {styles.textBoto}>Register</Text>       
            </TouchableOpacity> 
          </View> 
        </View>
        );
      } 
    }

const styles = StyleSheet.create({
  
    fonsTot: {
      flex: 10, 
    },
    cap: {
      flex: 1,
      borderWidth: 3,
      borderRadius: 3,
      backgroundColor:"#ffffff"
    },
    llista: {
      flex: 4,
      borderWidth: 3,
      borderRadius: 3,
      backgroundColor:"#ffffff"
    },
    botons: {
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    componentEstil:{
      flex: 3,
      backgroundColor:"#ffffff"
    },
    boto:{
      backgroundColor: "#ff0000",
      borderWidth: 3,
      padding: 10,
    },
    
  
  });