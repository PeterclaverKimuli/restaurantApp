import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  FlatList
} from 'react-native';
import _ from 'lodash'
import {Card} from "react-native-elements"
import SearchBar from 'react-native-searchbar';

var items = [
  {key: 'Waiter', branch:'Branch 1'},
  {key: 'Waiter 2', branch:'Branch 2'},
  {key: 'Waiter 3', branch:'Branch 3'},
  {key: 'Waiter 4', branch:'Branch 4'},
  {key: 'Waiter 5', branch:'Branch 5'}
];

const filterArray = ({key}, query) => {
  if(key.includes(query)){
    return true
  }

  return false
}

export default class SearchScreen extends Component {
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
      this.onPress = this.onPress.bind(this)
  }

  _handleResults(text) {
    let formattedText = text.toLowerCase()
    const data = _.filter(items, user =>{
      if(!formattedText){
        return null
      }else{
        return user.key.toLowerCase().includes(formattedText)
      }
    } )

    if(!data.length){
      this.setState({query:formattedText, results:['missing'] })
    }
    else{  
      this.setState({query:formattedText, results:data });
    }
  }

  showResults(){
    const showHeight = this.state.results.length ? Dimensions.get('window').height : null

    if(this.state.results[0] === 'missing'){
      return <Text style={{height:Dimensions.get('window').height}}>No results found results</Text>
    }else{
      return (
        <FlatList
          style={{height: showHeight}}
          data={this.state.results}
          renderItem = {({item}) => 
            <TouchableHighlight style={{marginLeft:40}} underlayColor='#FFF' onPress={() => this.goToWaiter(item.key, item.branch)}> 
              <Card containerStyle={{borderRadius:5, height:200, width:240, backgroundColor:'#F50057'}}
                    image={require('../img/avatar.png')}
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
  
  onPress(){
    this.props.navigator.dismissModal({
      animated: false, 
      animationType: 'fade' // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    })
  }


  render() {
    return (
      <View>
          <View style={{marginTop: 59, marginLeft:0, backgroundColor:'#fff'}}> 
            <View>
              {this.showResults()}
            </View>
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