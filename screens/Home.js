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
      datos: [],
      //name:this.props.navigation.getParam(name, undefined)
      
    };
  }

UNSAFE_componentWillMount()
{

  fetch('http://localhost:3000/elements')
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
  const { navigation } = this.props;
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
          
        <View>
            <Text style = {styles.textHeader}>
                Welcome {JSON.stringify(navigation.getParam('name'))}
            </Text>
        </View> 
        <View style = {{flex:0.75}}>
          
            <FlatList
            data ={this.state.datos}
            renderItem = {({item}) => 
            <View>  
                <Text style = {styles.textList}>{"Name: "}{item.nom}{"\n"}{"Description: "}{item.descripcio}{"\n"} </Text>
                <TouchableOpacity style ={styles.boto} onPress={()=> ((this.deleteEle(item.id)))}>
                    <Text style = {styles.textBoto}>BORRAR</Text>       
                </TouchableOpacity>
                
                <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('UpdateElement',{eid:item.id}))}>
                    <Text style = {styles.textBoto}>UPDATE</Text>       
                </TouchableOpacity>
  
                <Text>{"------------------------------------------------------------------------------------------------------------"} </Text>
            </View>}/>

        </View>
        <View>
          <TouchableOpacity style ={styles.boto} onPress={()=> (this.props.navigation.navigate('AddElement'))}>
                    <Text style = {styles.textBoto}>ADD ELEMENT</Text>       
          </TouchableOpacity> 
          
        </View>
      </View>
    );
      } 
}


elePost(eid, enom, edescripcio)
{
  var url = 'http://localhost:3000/elements/';
  var data = {
    id: eid,
    nom: enom,
    descripcio: edescripcio,
    
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

deleteEle(eid)
{

  var url = 'http://localhost:3000/elements/'+eid;


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
  textHeader:{
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  },
  textList:{
    fontSize: 16,
    fontWeight: "bold"
  },
  
  
});