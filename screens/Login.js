import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nombre  : '',
      password: ''
    }
  }
    static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#2f95dc',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  comprobarLogin(){
    let nombre = this.state.nombre;
    let password = this.state.password;
    const {navigate} = this.props.navigation;

    fetch('http://localhost:3000/usuaris?userName='+nombre+'&contrasenya='+password)
    .then((respuesta) => {
        if (respuesta.ok) {
          
            return respuesta.json();
            
        } else {
          
            console.log("Error conectando a http://localhost:3000");
        }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
        if(respuestaJSON.length<1){
          alert("Email o contraseña incorrecta");
        }else {
          navigate('Home', {name: nombre});
          
          
        }
    })
    .catch(error => {
        console.log("Error de red: " + error);
    });
  }

  
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
          
        <View style={styles.inputContainer}>
        
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(nombre) => this.setState({nombre})}/>
        </View>
        
        <View style={styles.inputContainer}>
                
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {this.comprobarLogin()}}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => navigate('Register')}>
          <Text style={styles.registerText}>¿Need to log ii? ¡Register here!</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: 'black',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#2f95dc",
    borderRightColor: '#2577b0',
    borderRightWidth: 5,
    borderLeftColor: '#2577b0',
    borderLeftWidth: 5,
  },
  registerButton: {
    backgroundColor: "black",
    borderRightColor: '#daf87d',
    borderRightWidth: 5,
    borderLeftColor: '#daf87d',
    borderLeftWidth: 5,
  },
  loginText: {
    color: 'white',
  },
  registerText: {
    color: '#daf87d',
    fontSize: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFDFDF',
    padding: 10
  },
})
