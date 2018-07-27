import React from 'react'
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


const AddButton = (props) => {
  const { navigator } = props;
  return (
    <TouchableOpacity style={styles.container} 
            onPress = {() => navigator.showLightBox({
                screen: 'restaurantApp.AddMenuItem',
                passProps: {
                  title: 'Add Menu item',
                },
                style: {
                  backgroundBlur: 'dark',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  tapBackgroundToDismiss: true,
                }
            }) 
          }
    >
      <View >
          <Image source = {require('../img/add_user.png')} style={[styles.button, {tintColor:'#FFF'}]}/>
      </View>
    </TouchableOpacity>
  )
  }
      
  export default AddButton