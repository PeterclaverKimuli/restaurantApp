import React from 'react'
import { Navigation } from 'react-native-navigation';
import {StyleSheet, Image, TouchableOpacity, View, Alert} from 'react-native'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  button: {
    overflow: 'hidden',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20
  }
});


const CustomButton = (props) => {
  const { navigator } = props;
  return (
    <TouchableOpacity style={styles.container} 
            onPress = {() => navigator.showModal({
                                    screen: 'restaurantApp.Search',
                                    animated: false,
                                  })}
    >
      <View >
          <Image source = {require('../img/search.png')} style={[styles.button, {tintColor:'#FFF'}]}/>
      </View>
    </TouchableOpacity>
  )
  }
      
  export default CustomButton