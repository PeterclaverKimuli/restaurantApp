import React from 'react'
import {FlatList, Text, View, StyleSheet, TouchableHighlight} from "react-native"
import {Card} from "react-native-elements"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default class WaiterScreen extends React.Component{
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

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.props.navigator.setButtons(this.navigatorButtons(this.props.navigator))
    this.goToWaiter = this.goToWaiter.bind(this)
  }

  navigatorButtons = (navigator) => {
    return {
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
      ],
      rightButtons: [
        {
          id: 'search',
          component: 'CustomButton',
          passProps: {
            navigator
          }
        }
      ],
      fab: {
        collapsedId: 'add',
        collapsedIcon: require('../img/add_user.png'),
        collapsedIconColor: '#FFF', // optional
        backgroundColor: '#F50057'
      }
    }
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

      if (event.id == 'add') { 
        this.props.navigator.push({
          screen: 'restaurantApp.InputInfo',
          title: 'Add user',
          animation: false
        });
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
            data={[
              {key: 'Waiter', branch:'Branch 1'},
              {key: 'Waiter 2', branch:'Branch 2'},
              {key: 'Waiter 3', branch:'Branch 3'},
              {key: 'Waiter 4', branch:'Branch 4'},
              {key: 'Waiter 5', branch:'Branch 5'}
          ]}
            renderItem={({item}) => 
              <TouchableHighlight style={{marginLeft:40}} underlayColor='#FFF' onPress={() => this.goToWaiter(item.key)}>
                <Card containerStyle={{borderRadius:5, height:220, width:260, backgroundColor:'#F50057'}}
                      image={require('../img/avatar.png')}
                      imageStyle={{height: 150, width:260}}>
                  <Text style={{color:'#FFF'}}>Name: {item.key}</Text>
                  <Text style={{color:'#FFF'}}>Branch: {item.branch}</Text>
                  <Text style={{color:'#0D47A1'}}>Press for more...</Text>
                </Card>
              </TouchableHighlight>
            }
        />
      </View>
    )
  }

  goToWaiter = (title) => {
    this.props.navigator.push({
        screen: 'restaurantApp.EmployeeInfo',
        title: title
    });  
    this.props.navigator.toggleDrawer({
        side: 'left', 
        animated: true, 
        to: 'missing' 
      });    
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