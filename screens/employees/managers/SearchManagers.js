import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  FlatList,
  StyleSheet
} from 'react-native';
import _ from 'lodash'
import {Card} from "react-native-elements"
import SearchBar from 'react-native-searchbar';

var items = [
    {key: 'Manager 1', branch:'Branch 1'},
    {key: 'Manager 2', branch:'Branch 2'},
    {key: 'Manager 3', branch:'Branch 3'},
    {key: 'Manager 4', branch:'Branch 4'},
    {key: 'Manager 5', branch:'Branch 5'}
];

export default class ManagerSearchScreen extends Component {
  static navigatorStyle = {
      navBarHidden: true,
      statusBarColor: '#F50057',
      }

  constructor(props) {
      super(props);
      this.state = {
          results: [],
          query: ''
      };
      this._handleResults = this._handleResults.bind(this)
      this.showResults = this.showResults.bind(this)
      this.onPress = this.onPress.bind(this)
  }

  _handleResults(text) {
    let formattedText = text.toLowerCase()
    const data = _.filter(items, user =>{
      return user.key.toLowerCase().includes(formattedText)
    } )

    if(!data.length){
      this.setState({query:formattedText, results:['missing'] })
    }
    else{  
      this.setState({query:formattedText, results:data })
    }
  }

  showResults(){
    const listHeight = this.state.results.length ? Dimensions.get('window').height : null

    if(this.state.results[0] === 'missing'){
      return <Text style={styles.missingResults}>No results found</Text>
    }else{
      return (
        <FlatList
          style = {{height:listHeight}}
          showsVerticalScrollIndicator={false}
          data={this.state.results}
          renderItem = {({item}) => 
            <TouchableHighlight style={{marginLeft:40}} underlayColor='#FFF' onPress={() => this.goToManager(item.key, item.branch)}> 
              <Card containerStyle={styles.card}
                    image={require('../../img/avatar.png')}
                    imageStyle={{height: 130, width:240}}>
                <Text style={{color:'#FFF'}}>Name: {item.key}</Text>
                <Text style={{color:'#FFF'}}>Branch: {item.branch}</Text>
                <Text style={{color:'#0D47A1'}}>Press for more...</Text>
              </Card>
            </TouchableHighlight>
          }
        />
      )
    }    
  }

  goToManager = (title, branch) => {
    this.props.navigator.dismissModal({
      animated: false, 
      animationType: 'fade' // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    })

    this.props.navigator.push({
        screen: 'restaurantApp.EmployeeInfo',
        title: title,
        passProps:{
          name: title,
          branch: branch
        }
    });
  }
  
  onPress(){
    this.props.navigator.dismissModal({
      animated: false, 
      animationType: 'fade' // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    })
  }


  render() {
    return (
      <View style={{flex:1}}>
          <View style={styles.searchContainer}>
            {this.showResults()}
          </View>
          <SearchBar
            placeholder = 'Search...'
            ref={(ref) => this.searchBar = ref}
            data={items}
            handleChangeText = {this._handleResults}
            iconColor = '#F50057'
            showOnLoad
            onBack = {this.onPress}
            fontSize = {18}
            selectionColor = '#F50057'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 59, 
    marginLeft:0, 
    backgroundColor:'#fff',
  },

  missingResults:{
    color:'#000',
    fontSize: 18,
    height:Dimensions.get('window').height,
    justifyContent:'center',  
    paddingLeft:Dimensions.get('window').width*0.3, 
    paddingTop:50
  },
  
  card:{
    borderRadius:5, 
    height:200, 
    width:240,
    backgroundColor:'#F50057',
    borderWidth:0,
    borderColor:'#fff'
  }
})