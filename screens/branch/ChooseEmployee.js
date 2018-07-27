import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ChooseEmployeeScreen extends Component {
  static navigatorStyle = {
      navBarHidden: true,
      statusBarColor: '#F50057',
      }

  constructor(props) {
      super(props);
      this.state = {}; 
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={{marginTop:10}}>  
            <TouchableOpacity style={styles.content} onPress = {this.goToManagers}>
                <MaterialIcons name="face" size={24} color={'#F50057'}/>
                <Text style={styles.text}>Managers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content} onPress = {this.goToWaiters}>
                <MaterialIcons name="face" size={24} color={'#F50057'}/>
                <Text style={styles.text}>Waiters</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }

  goToManagers = () =>{
    this.props.navigator.dismissLightBox();

    this.props.navigator.push({
        screen: 'restaurantApp.Managers',
        title: 'Managers',
    });           
  }
  goToWaiters = () =>{
    this.props.navigator.dismissLightBox();

    this.props.navigator.push({
        screen: 'restaurantApp.Waiters',
        title: 'Waiters',
    });         
  }
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.7,
      height: Dimensions.get('window').height * 0.25,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      padding: 16
    },

    heading:{
        flexDirection:'row', 
        justifyContent:'center', 
        borderBottomWidth: 0.5, 
        paddingBottom: 5
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
    },

    content: { 
        paddingLeft: 3,
        paddingTop: 5,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text:{
        fontSize: 18,
        paddingLeft:20,
        paddingTop: 5,
        fontWeight: '400'
    }
})