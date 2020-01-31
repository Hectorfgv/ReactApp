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


export default class UpdateElement extends Component {
  constructor(props) {
    super(props)
    this.state ={
      documentJSON: undefined,
      datos: [],
      
    };
  }



render()
{
    const { navigation } = this.props;
    return (
      <View style = {styles.container}> 
          
        <View>
            <Text>id {JSON.stringify(navigation.getParam('eid'))}</Text>
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='NAME'
              placeholderTextColor='#FF0000'
              maxLength = {32}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({enom: value})}
              value={this.state.enom}
              >
            </TextInput>
            
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='DESCRIPTION'
              placeholderTextColor='#FF0000'
              keyboardType={"default"}
              onChangeText={(value) => this.setState({edescripcio: value})}
              value={this.state.edescripcio}
              >
            </TextInput>
            <TouchableOpacity style ={styles.boto} onPress={()=> ((this.updateEle(this.state.eid, this.state.enom, this.state.edescripcio)))}>
                    <Text style = {styles.textBoto}>UPDATE</Text>       
            </TouchableOpacity>
            <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('Home'))}>
                    <Text style = {styles.textBoto}>BACK</Text>       
            </TouchableOpacity>
        </View>    
      </View>
    );
      
}


updateEle(eid, enom, edescripcio)
{
  
  var url = 'http://localhost:3000/elements/'+eid;
  var data = {
    id: eid,
    nom: enom,
    descripcio: edescripcio
   

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