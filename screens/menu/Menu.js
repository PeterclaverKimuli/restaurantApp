import React from 'react'
import {SectionList, Text, View, StyleSheet} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class MenuScreen extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#F50057',
        navBarTextColor: '#FFF',
        statusBarColor: '#F50057'
    }

    constructor(props) {
        super(props);

        this.state = {date:null}
        
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true
        });
    
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.props.navigator.setButtons(this.navigatorButtons(this.props.navigator))
    }

    navigatorButtons = (navigator) => {
        return {
          fab: {
            collapsedId: 'take_order',
            collapsedIcon: require('../img/take_order.png'),
            collapsedIconColor: '#FFF', // optional
            backgroundColor: '#F50057'
          }
        }
    }

    onNavigatorEvent(event) { 
        if (event.type == 'NavBarButtonPress') { 
          if (event.id == 'take_order') { 
            this.props.navigator.push({
              screen: 'restaurantApp.InputInfo',
              title: 'Take order',
              animation: false
            });
          }
        }
      }

    render(){
        return(
            <View>
                <Text>Halo</Text>

                
            </View>
        )
    }
}