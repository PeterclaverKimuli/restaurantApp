import React from 'react'
import {FlatList, Text, View, Image, ScrollView, ImageBackground, 
        TouchableOpacity, TouchableHighlight} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Styles'

export default class DrawerScreen extends React.Component{
    static navigatorStyle = {
        navBarHidden: true
    }

    constructor(props){
        super(props)

        this.state = {title: null}

        this.branches = [
            {key: 'Branch 1'},
            {key: 'Branch 2'},
            {key: 'Branch 3'},
            {key: 'Branch 4'},
            {key: 'Branch 5'}
        ]
    }

    render(){
        return(
            <View style={styles.container}>
                
                <ImageBackground source={require('../img/logo.jpg')} style={styles.img}> 
                    <Text style={{marginBottom: 0, marginLeft:-15, fontSize:16, fontStyle:'italic'}}>Username</Text>
                </ImageBackground>
                
                <ScrollView>
                    <View style={styles.branchContainer}>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToHome}>
                            <MaterialIcons name="account-circle" size={24} color={'#F50057'}/>
                            <Text style={{paddingLeft:20}}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToTransactions}>
                            <MaterialIcons name="receipt" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Transactions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToInventory}>
                            <MaterialIcons name="shopping-cart" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Inventory</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.branchContainer}>
                        <Text style={styles.branches}>Branches</Text>
                        <FlatList
                            data={this.branches}
                            renderItem={({item}) => 
                                <TouchableOpacity style={styles.branch} onPress = {this.goToBranch}>
                                    <MaterialIcons name="store" size={24} color={'#F50057'}/>
                                    <Text style={{paddingLeft:20}}>{item.key}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>

                    <View style={styles.branchContainer}>
                        <Text style={styles.action}>Employees</Text>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToManagers}>
                            <MaterialIcons name="face" size={24} color={'#F50057'}/>
                            <Text style={{paddingLeft:20}}>Managers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToWaiters}>
                            <MaterialIcons name="face" size={24} color={'#F50057'}/>
                            <Text style={{paddingLeft:20}}>Waiters</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.branchContainer}>
                        <Text style={styles.action}>Actions</Text>
                        <TouchableOpacity style={styles.actions} onPress = {this.Logout}>
                            <MaterialIcons name="create" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.Logout}>
                            <Entypo name="log-out" size={24} color={'#F50057'}/>
                            <Text style={{paddingLeft:20}}>Log-out</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    Logout = () => {

        this.props.navigator.popToRoot({
            animated: true,
            animationType: 'fade'
        }); 

        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: false 
        });     
    }

    setTitle = (branchName) => {
        this.setState({title:branchName})
        return this.state.title
    }

    goToBranch = () => {
        this.props.navigator.push({
            screen: 'restaurantApp.Branch',
            title: 'Branch'
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });    
    }

    goToHome = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.HomePage',
            title: 'Homepage',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });    
    }

    goToTransactions = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.Transactions',
            title: 'Transactions',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });            
    }

    goToInventory = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.Inventory',
            title: 'Inventory',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });            
    }
    goToManagers = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.Managers',
            title: 'Managers',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });            
    }
    goToWaiters = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.Waiters',
            title: 'Waiters',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });            
    }
}