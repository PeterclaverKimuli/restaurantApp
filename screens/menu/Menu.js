import React from 'react'
import {SectionList, Text, View, StyleSheet, Dimensions, RefreshControl} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {SearchBar} from "react-native-elements"
import _ from 'lodash'
import {returnMenuItem} from './helper'

export default class MenuScreen extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#F50057',
        navBarTextColor: '#FFF',
        statusBarColor: '#F50057',
        navBarButtonColor: '#FFF',
    }

    constructor(props) {
        super(props);

        this.state = {
            menu:[], 
            searchMenu:[],
            refreshing: false,
            query: ''
        }
        
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true
        });
    
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.props.navigator.setButtons(this.navigatorButtons(this.props.navigator))

        this.menuItems = this.menuItems.bind(this)
        this._onRefresh = this._onRefresh.bind(this)
        this.missingItems = this.missingItems.bind(this)
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

    handleSearch = (text) => {
        let items = returnMenuItem() 
        let formattedText = text.toLowerCase()

        const data = _.filter(items, user =>{
            return user.title.toLowerCase().includes(formattedText)

            // return user.data.forEach( item => {
            //     return item.includes(formattedText);
            // }); 
        } )

        this.setState({query:formattedText, searchMenu:data })
    }

    handleClear = () => {
        this.setState({query:formattedText, searchMenu:[] })
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.setState({menu:returnMenuItem(), refreshing:false})
      }

    missingItems(){
        return(
            <View style={{alignItems:'center', marginTop:Dimensions.get('window').height*0.25}}>
                <Text style={styles.missing}>No menu items yet.</Text>
                <MaterialIcons name='broken-image' color='#F50057' size={45}/>
            </View> 
        )
    }

    menuItems(){
        this.state.menu = returnMenuItem()
        let dateStyle = !this.state.menu.length  ? {} : StyleSheet.create({
                dateView:{
                    flexDirection:'column', 
                    justifyContent:'flex-start', 
                }
            })
        
        let date = !this.state.menu.length  ? {} : StyleSheet.create({
            date:{
                fontSize: 17,
                fontWeight: 'bold', 
                padding: 5,
                color: '#F50057',
                marginBottom: 5,
                borderBottomWidth: 0.5,
                borderBottomColor: '#F50057'
            },
        })

        let dateText = !this.state.menu.length  ? {} : StyleSheet.create({
            dateText:{
                fontSize: 15
            },
        })

        if(!this.state.searchMenu.length){
            return (
                <View style={{flex:1, backgroundColor:'#f9fbe7'}}>
                    <SearchBar
                    lightTheme
                    containerStyle = {{backgroundColor:'#f9fbe7', borderBottomWidth:0}}
                    inputStyle = {{backgroundColor:'#f9fbe7', borderWidth:1, borderColor:'#F50057',}}
                    round
                    placeholder='Search menu...'
                    onChangeText = {this.handleSearch} />
    
                    <View style={dateStyle.dateView}>
                        < Text style={date.date}>
                            {this.state.menu.length ? 'Date: ' : null} 
                            <Text style={dateText.dateText}>{this.state.menu.length ? this.state.menu[0].date : null}</Text>
                        </Text>
                    </View>
                    
                    <SectionList
                        sections={this.state.menu}
                        refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={this._onRefresh}
                              colors = {['#F50057']}
                            />
                        }
                        ListEmptyComponent = {this.missingItems()}
                        renderItem={({item}) => 
                            <View style={styles.menuItems}>
                                <Text style={{color:'#F50057', width:205, fontSize:16}}>{item[0]}</Text>
                                <Text style={{marginLeft:60, color:'#F50057', fontSize:16, fontWeight:'bold'}}>Ush. {item[1]}</Text>
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
        }else{
            return (
            <View style={{flex:1, backgroundColor:'#f9fbe7'}}>
                <SearchBar
                lightTheme
                containerStyle = {{backgroundColor:'#f9fbe7', borderBottomWidth:0}}
                inputStyle = {{backgroundColor:'#f9fbe7', borderWidth:1, borderColor:'#F50057',}}
                round
                placeholder='Search menu...' 
                onChangeText = {this.handleSearch}/>

                <SectionList
                    sections={this.state.searchMenu}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            colors = {['#F50057']}
                        />
                    }
                    ListEmptyComponent = {<Text>Missing</Text>}
                    renderItem={({item}) => 
                        <View style={styles.menuItems}>
                            <Text style={{color:'#F50057', width:205, fontSize:16}}>{item}</Text>
                            <Text style={{marginLeft:60, color:'#F50057', fontSize:16, fontWeight:'bold'}}>Ush. {item}</Text>
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
        borderBottomWidth: 0.3, 
        borderBottomColor: '#F50057',
        paddingBottom: 5,
        marginTop: 10,
    },

    sectionHeader:{
        color: '#F50057',
        fontSize: 20,
        fontWeight: '500'
    },

    menuItems: {
        paddingLeft: 3,
        paddingTop: 10,
        paddingLeft: 5,
        width: Dimensions.get('window').width * 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})