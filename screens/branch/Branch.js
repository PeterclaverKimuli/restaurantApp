import React from 'react'
import {SectionList, Text, View, StyleSheet, TouchableHighlight} from "react-native"
import {Card} from "react-native-elements"



export default class BranchScreen extends React.Component{
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
          to: 'open'
        });
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.cards}>
          <TouchableHighlight style={{flex:1}}>
            <Card containerStyle={{borderRadius:5}}
                  image={require('../img/menu.jpg')}>
              <Text style={{textAlign:'center', fontWeight:'bold'}}>MENU</Text>
              <Text style={{textAlign:'center'}}>Press to view the menu</Text></Card>
          </TouchableHighlight>
          
          <TouchableHighlight style={{flex:1}}>
            <Card containerStyle={{borderRadius:5}}
                  image={require('../img/transaction.jpg')}>
              <Text style={{textAlign:'center', fontWeight:'bold'}}>TRANSACTIONS</Text>
              <Text style={{textAlign:'center'}}>Press to check your transactions</Text>
            </Card>
          </TouchableHighlight>
        </View>
        <View style={styles.cards}>
          <TouchableHighlight style={{flex:1}}>
            <Card containerStyle={{borderRadius:5}}
                  image={require('../img/inventory.jpg')}>
              <Text style={{textAlign:'center', fontWeight:'bold'}}>INVENTORY</Text>
              <Text style={{textAlign:'center'}}>Press to check the inventory</Text></Card>
          </TouchableHighlight>

          <TouchableHighlight style={{flex:1}}>
            <Card containerStyle={{borderRadius:5}}
                  image={require('../img/employees.jpg')}>
              <Text style={{textAlign:'center', fontWeight:'bold'}}>EMPLOYEES</Text>
              <Text style={{textAlign:'center'}}>Press to view the employees</Text></Card>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
    
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  cards:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})