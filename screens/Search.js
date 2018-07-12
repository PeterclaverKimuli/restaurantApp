import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SearchBar from 'react-native-searchbar';

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

export default class SearchScreen extends Component {
  static navigatorStyle = {
      navBarHidden: true,
      statusBarColor: '#F50057',
      }

  constructor(props) {
      super(props);
      this.state = {
          items,
          results: []
      };
      this._handleResults = this._handleResults.bind(this)
      this.onPress = this.onPress.bind(this)
  }

  _handleResults(results) {
      this.setState({ results });
  }
  
  onPress(){
    this.props.navigator.dismissModal({
      animated: false, 
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    })
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor:'#fff'}}>
          <View style={{ marginTop: 70, marginLeft:5, backgroundColor:'#fff'}}>
          {
              this.state.results.map((result, i) => {
              return (
                  <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                  </Text>
              );
              })
          }
          </View>
          <SearchBar
            placeholder = 'Search...'
            ref={(ref) => this.searchBar = ref}
            data={items}
            handleResults={this._handleResults}
            iconColor = '#F50057'
            showOnLoad
            onBack = {this.onPress}
          />
      </View>
    )
  }
}