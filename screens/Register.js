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


export default class Register extends Component {
  constructor(props) {
    super(props);
        this.state={
            documentJSON: undefined,
            datos: []
          
    };
  }
   
    render() {
      return (
        <View style={styles.fonsTot}>
          <View>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='NICKNAME'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({uuserName: value})}
              value={this.state.uuserName}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='PASSWORD'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"password"}
              onChangeText={(value) => this.setState({ucontrasenya: value})}
              value={this.state.ucontrasenya}
              >
            </TextInput>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='NAME'
              placeholderTextColor='#FF0000'
              maxLength = {9}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({unom: value})}
              value={this.state.unom}
              >
            </TextInput>
          </View>
          <View>
          <TouchableOpacity style ={styles.boto} onPress={()=> ((this.usuPost(this.state.uid, this.state.uuserName, this.state.ucontrasenya, this.state.unom)))}>
                    <Text style = {styles.textBoto}>APPLY</Text>       
          </TouchableOpacity> 
            <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('Login'))}>
                    <Text style = {styles.textBoto}>BACK</Text>       
            </TouchableOpacity> 
          </View> 
        </View>
        );
      } 
usuPost(uid, uuserName, ucontrasenya, unom)
{ 
  var url = 'http://localhost:3000/usuaris/';
  var data = {
    id: uid,
    userName: uuserName,
    contrasenya: ucontrasenya,
    nom: unom
  };

  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    }
  })
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
      else {
        console.log("Error haciendo el POST");
      }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Post insertado correctamente " + data.userName + " " + data.nom);
    })
    .catch(error => {

      console.log("Error de red " + error);
    });
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