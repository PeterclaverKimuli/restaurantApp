import React from 'react'
import {SectionList, Text, View, StyleSheet, Dimensions} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {returnMenuItem} from '../helper'

export default class MenuScreen extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#F50057',
        navBarTextColor: '#FFF',
        statusBarColor: '#F50057',
        navBarButtonColor: '#FFF',
    }

    constructor(props) {
        super(props);

        this.state = {menu:null, sectionMenu:null}
        
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true
        });
    
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.props.navigator.setButtons(this.navigatorButtons(this.props.navigator))
    }

    navigatorButtons = (navigator) => {
        return {
            rightButtons: [
                {
                    id: 'add',
                    component: 'AddButton',
                    passProps: {
                        navigator
                    }
                }
            ], 
        }
    }

    static navigatorButtons = { 
        fab: {
            collapsedId: 'take_order',
            collapsedIcon: require('../img/take_order.png'),
            collapsedIconColor: '#FFF', // optional
            backgroundColor: '#F50057'
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

    componentDidUpdate(){
        this.state.menu = returnMenuItem()
    }

    menuItems(){
        this.state.menu = returnMenuItem()
        if(!this.state.menu.length){
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.missing}>No menu items yet.</Text>
                    <MaterialIcons name='broken-image' color='#F50057' size={45}/>
                </View>
            )
        }else{
            return (
                <View style={{flex:1}}>
                    <View style={{backgroundColor:'#C51162', flexDirection:'column', justifyContent:'flex-start', alignItems: 'center'}}>
                        < Text style={styles.date}>Date: <Text style={styles.dateText}>{this.state.menu[0].date}</Text></Text>
                    </View>

                    <SectionList
                        sections={this.state.menu}
                        renderItem={({item}) => 
                            <View style={styles.menuItems}>
                                <Text style={{color:'#fff', width:230, fontSize:16,}}>{item[0]}</Text>
                                <Text style={{marginLeft:60, color:'#fff', fontSize:16}}>{item[1]}</Text>
                            </View>
                        }
                        renderSectionHeader={({section}) => 
                            <View style={styles.heading}>
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                            </View>
                        }
                        keyExtractor={(item, index) => index}
                    />
                </View>
            )
        }
    }

    render(){
        return(
            this.menuItems()
        )
    }
}

const styles = StyleSheet.create({
    missing:{
        color: '#F50057',
        fontWeight: 'bold',
        fontSize: 30
    },

    heading:{
        flexDirection:'row', 
        justifyContent:'center', 
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5, 
        paddingBottom: 5
    },

    sectionHeader:{
        color: '#F50057',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },

    date:{
        fontSize: 17,
        fontWeight: 'bold', 
        padding: 5,
        color: '#fff',
        marginBottom: 10
    },

    dateText:{
        fontSize: 15
    },

    menuItems: {
        paddingLeft: 3,
        paddingTop: 10,
        paddingLeft: 5,
        width: Dimensions.get('window').width * 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#C51162'
    }
})