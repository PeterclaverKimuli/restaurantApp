import React from 'react'
import {SectionList, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native"
import {DrawerNavigator} from 'react-navigation'

export default class EmployeeInfoScreen extends React.Component{
  static navigatorStyle = {
    navBarBackgroundColor: '#F50057',
    navBarTextColor: '#FFF',
    statusBarColor: '#F50057'
  }

  constructor(props) {
    super(props);
    
    this.props.navigator.setDrawerEnabled({
        side: 'left', 
        enabled: true
    });

  }

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Side Menu',
        id: 'sideMenu', 
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: false, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: '#FFF',
        buttonFontSize: 16, 
        buttonFontWeight: '600' 
      }
    ]
  }

  onNavigatorEvent(event) { 
    if (event.type == 'NavBarButtonPress') { 
      if (event.id == 'sideMenu') { 
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
          to: 'open', // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        });
      }
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.profilepic}>
          <Image source={require('../img/avatar.png')} style={{height:165, width: 165, borderRadius: 90, alignSelf:'center'}}></Image>
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