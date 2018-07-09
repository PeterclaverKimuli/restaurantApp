import React from 'react'
import {SectionList, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native"

export default class EmployeeInfoScreen extends React.Component{
  static navigatorStyle = {
    navBarBackgroundColor: '#F50057',
    navBarTextColor: '#FFF',
    statusBarColor: '#F50057',
    navBarButtonColor: '#FFF',
}  

  constructor(props) {
    super(props);

  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.profilepic}>
          <Image source={require('../img/peterclaver.jpg')} style={{height:165, width: 165, borderRadius: 90, alignSelf:'center'}}></Image>
        </View>
        <ScrollView style={styles.container}>
            <Text style={styles.textContainer}>Name: </Text>
            <Text style={styles.textContainer}>ID Number: </Text>
            <Text style={styles.textContainer}>Gender: </Text>
            <Text style={styles.textContainer}>Branch: </Text>
            <Text style={styles.textContainer}>Position: </Text>
            <Text style={styles.textContainer}>Birthday: </Text>
            <Text style={styles.textContainer}>Home Address: </Text>
            <Text style={styles.textContainer}>Telephone: </Text>
            <Text style={styles.textContainer}>Email: </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: '#FFF'}}>Edit account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: '#FFF'}}>Delete account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}> 
              <TouchableOpacity style={styles.button}>
                  <Text style={{color: '#FFF'}}>Check transactions status</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    )
  }
    
}

const styles = StyleSheet.create({
    profilepic:{
      marginTop: 5,
      marginLeft: 98,
      borderColor: '#F50057',
      borderRadius: 90,
      width: 170,
      height: 170
    },
    container:{
        paddingLeft: 15,
    },
    textContainer:{
        padding: 20, 
        color: '#F50057', 
        borderBottomColor:'#E0E0E0', 
        borderBottomWidth: 0.5,
        fontWeight: 'bold'
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    button:{
      padding: 20,
      backgroundColor: '#F50057',
      borderRadius: 5,
      margin: 10,
    }
})