class ItemElement extends Component {
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
              <Text>
                  Welcome {JSON.stringify(navigation.getParam('name'))}
              </Text>
          </View> 
          <View style = {{flex:0.75}}>
            
              <FlatList
              data ={this.state.datos}
              renderItem = {({item}) => 
              <View>  
                  <Text>{"Name: "}{item.nom}{"\n"}{"Description: "}{item.descripcio}{"\n"} </Text>
                  <TouchableOpacity onPress={()=> ((this.deleteEle(this.state.eid)))}>
                      <Text style = {styles.textBoto}>BORRAR</Text>       
                  </TouchableOpacity>
                  
                  <TouchableOpacity  onPress={()=> (this.props.navigation.navigate('UpdateElement',{eid:this.state.eid}))}>
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
  }