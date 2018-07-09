import React from 'react'
import {SectionList, Text, View, StyleSheet} from "react-native"



export default class TransactionScreen extends React.Component{
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
      <Text>Hi</Text>
    )
  }
    
}