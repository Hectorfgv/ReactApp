/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, FlatList, TouchableOpacity, TextInput} from 'react-native';


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state ={
      documentJSON: undefined,
      datos: []
      
    };
  }

UNSAFE_componentWillMount()
{

  fetch('http://localhost:3000/usuaris')
    .then((resposta) => {
      if (resposta.ok) {
        console.log("En willmount");
        return resposta.json();
      } 
      else {
        console.log("Error conectado con la base de datos");
      }
    })
    .then((documentJSON) => this.setState({ datos: documentJSON }))
    .catch(error => {

      console.log("Error de red " + error);
    });



}

render()
{
  if (this.state.datos.length === 0) {
    return (
      <View>
        <Text>
          Carregant..
         </Text>

      </View>
    );
  }
  else {
    return (
      <View style = {styles.container}> 
          <View style = {{flex:0.75}}>
          <FlatList
          data ={this.state.datos}
          renderItem = {({item}) => (<Text> {item.id}{"-"}{item.userName}{"\n"}{item.contrasenya}{"\n"}{item.nom} </Text>)}
          />
          <Text>Probant</Text>
              
        </View>
        <View>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='ID'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              TextSize = {16}
              onChangeText={(value) => this.setState({uid: value})}
              value={this.state.uid}
              >
            </TextInput>
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
                    <Text style = {styles.textBoto}>INSERTAR</Text>       
          </TouchableOpacity> 
          <TouchableOpacity style ={styles.boto} onPress={()=> ((this.deleteUsu(this.state.uid)))}>
                    <Text style = {styles.textBoto}>BORRAR</Text>       
          </TouchableOpacity> 
          <TouchableOpacity style ={styles.boto} onPress={()=> ((this.updateUsu(this.state.uid, this.state.uuserName, this.state.ucontrasenya, this.state.unom)))}>
                    <Text style = {styles.textBoto}>UPDATE</Text>       
          </TouchableOpacity> 
        </View>
      </View>
    );
      } 
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

updateUsu(uid, uuserName, ucontrasenya, unom)
{
  
  var url = 'http://localhost:3000/usuaris/'+uid;
  var data = {
    id: uid,
    userName: uuserName,
    contrasenya: ucontrasenya,
    nom: unom

  };

  fetch(url, {
    method: 'PUT',
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
        console.log("Error haciendo el UPDATE");
      }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Usuario " + data.userName + " actualizado");
    })
    .catch(error => {
      console.log("Error de red " + error);
    });


}

deleteUsu(uid)
{

  var url = 'http://localhost:3000/usuaris/'+uid;


  fetch(url, {
    method: 'DELETE',

  })

    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();

      }
      else {
        console.log("Error haciendo el borrado");
      }

    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Se ha borrado correctamente");

    })

    .catch(error => {

      console.log("Error de red " + error);
    });

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  comptador: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});