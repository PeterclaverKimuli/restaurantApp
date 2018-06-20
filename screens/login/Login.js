import React from 'react'
import {Alert, Text, View, Image, Button, TouchableOpacity, TouchableHighlight} from "react-native"
import styles from './Styles'
import {Card} from "react-native-elements"
import { TextField } from 'react-native-material-textfield';

export default class LoginScreen extends React.Component{
    static navigatorStyle = {
        navBarHidden: true,
        statusBarColor: '#F50057',
    }   
    constructor(props) {
        super(props);
        this.state = {username: null, password:null};
        
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true 
        });
      }

    render(){
        return(
            <View style={styles.container}>
               <Card image={require('../img/logo.jpg')}>
                    <View style={styles.inputContainer}>
                        <TextField label='username' 
                                   onChangeText={ (name) => this.setState({ username:name })}  
                                   containerStyle={styles.input}/>

                        <TextField secureTextEntry={true} 
                                   label='password'
                                   onChangeText={ (pass) => this.setState({ password:pass })} 
                                   containerStyle={styles.input}/>

                        <TouchableOpacity onPress = {this.Login} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableHighlight>
                            <Text style={styles.buttonText1}>Forgot Password? Click here to reset.</Text>
                        </TouchableHighlight>
                    </View>
               </Card>
               <TouchableHighlight>
                    <Text style={styles.buttonText1}>
                        By Logging in, you agree to our Terms of Use and Privacy Policy
                    </Text>
               </TouchableHighlight>
            </View>
        )
    }

    Login = () => {
       if(this.state.username==='john' && this.state.password==='kimuli'){
            this.props.navigator.push({
                screen: 'restaurantApp.HomePage',
                title: 'Homepage',
            });
       }
       else{
           Alert.alert(
               'Wrong information',
               'Either the username or password is wrong. Please re-enter your information',
               [{text: 'OK'}]
           )
       }    
    }
}

