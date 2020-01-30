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

export default class Formulari extends Component {
  constructor(props) {
    super(props);
        this.state={
          elDNIintroduit: undefined,
          LetraDNI: undefined,
    };
  }
    guardaDNI(valor){
      if (valor.length===8){
        this.setState({elDNIintroduit:valor})
        //console.log(this.state.elDNIintroduit)
        let laLletra=calcularLletraDNI(valor);
        this.setState({LetraDNI:laLletra})
      }   
    }
    mostrarTodo(){

    }
    render() {
      return (
        <View style={styles.fonsTot}>
          <View>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='DNI'
              placeholderTextColor='#FF0000'
              onChangeText={(elDNIintroduit)=>this.guardaDNI(elDNIintroduit)}
              maxLength = {8}
              keyboardType={"number-pad"}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Letter'
              placeholderTextColor='#FF0000'
              value={this.state.LetraDNI}
              editable={false}
              >
            </TextInput>
          </View>
          <View>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Name'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              TextSize = {16}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Lastname'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"default"}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Address'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"default"}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Phone'
              placeholderTextColor='#FF0000'
              maxLength = {9}
              keyboardType={"phone-pad"}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='E-mail'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"email-address"}
              >
            </TextInput>
            <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('Segona'))}>
                    <Text style = {styles.textBoto}>Segona</Text>       
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