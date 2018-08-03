import React from 'react'
import {FlatList, Text, View, Image, ScrollView, ImageBackground, 
        TouchableOpacity, TouchableHighlight} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Styles'
import MyView from './hideBranches';


export default class DrawerScreen extends React.Component{
    static navigatorStyle = {
        navBarHidden: true
    }

    constructor(props){
        super(props)

        this.state = {title: null, isHidden: false}

        this.Hide = this.Hide.bind(this)

        this.branches = [
            {key: 'Branch 1'},
            {key: 'Branch 2'},
            {key: 'Branch 3'},
            {key: 'Branch 4'},
            {key: 'Branch 5'}
        ]
    }
    
    Hide = () =>{
        this.branches.length === 1 ? this.state.isHidden : !this.state.isHidden
    }

    render(){
        return(
            <View style={styles.container}>
                
                <ImageBackground source={require('../img/logo.jpg')} style={styles.img}> 
                    <Text style={{marginTop: 10, marginLeft:3, fontSize:16, fontStyle:'italic'}}>Username</Text>
                </ImageBackground>
                
                <ScrollView showsVerticalScrollIndicator={false}>
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
                        <MyView hide={this.branches.length === 1 ? this.state.isHidden : !this.state.isHidden}>
                            <TouchableOpacity style={styles.actions} onPress = {this.goToMenu}>
                                <MaterialIcons name="restaurant-menu" size={24} color={'#F50057'}/>   
                                <Text style={{paddingLeft:20}}>Menu</Text>
                            </TouchableOpacity>
                        </MyView>
                    </View>

                    <MyView style={styles.branchContainer} hide={this.branches.length === 1 ? !this.state.isHidden : this.state.isHidden}>
                        <Text style={styles.action}>Branches</Text>
                        <FlatList
                            data={this.branches}
                            renderItem={({item}) => 
                                <TouchableOpacity style={styles.branch} onPress = {() => this.goToBranch(item.key)}>
                                    <MaterialIcons name="store" size={24} color={'#F50057'}/>
                                    <Text style={{paddingLeft:20}}>{item.key}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </MyView>

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
                        <TouchableOpacity style={styles.actions} onPress = {this.goToAddUser}>
                            <MaterialIcons name="portrait" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Add User</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.goToAddMenuItem}>
                            <MaterialIcons name="restaurant-menu" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Add menu item</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.changePassword}>
                            <MaterialIcons name="create" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress = {this.Logout}>
                            <MaterialIcons name="help" size={24} color={'#F50057'}/>   
                            <Text style={{paddingLeft:20}}>Help</Text>
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

    goToAddUser = () => {
        this.props.navigator.push({
            screen: 'restaurantApp.InputInfo',
            title: 'Add user'
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });    
    }

    goToAddMenuItem = () => {
        this.props.navigator.showLightBox({
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
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });    
    }

    goToBranch = (title) => {
        this.props.navigator.push({
            screen: 'restaurantApp.Branch',
            title: title,  
            passProps:{
                title
            }
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

    goToMenu = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.Menu',
            title: 'Menu',
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
    changePassword = () =>{
        this.props.navigator.push({
            screen: 'restaurantApp.ChangePassword',
            title: 'Reset Password',
        });  
        this.props.navigator.toggleDrawer({
            side: 'left', 
            animated: true, 
            to: 'missing' 
          });            
    }
}