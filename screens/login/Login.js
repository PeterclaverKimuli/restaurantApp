import React from 'react'
import {Alert, Text, View, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight} from "react-native"
import {Card} from "react-native-elements"
import { TextField } from 'react-native-material-textfield';

export default class LoginScreen extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#F50057',
        navBarTextColor: '#FFF',
        navBarTitleTextCentered: true,
        navBarHidden: true
    }

    
    constructor(props) {
        super(props);
        this.state = {username: null, password:null};
      }


    render(){
        return(
            <View style={styles.container}>
               <Card containerStyle={styles.logo} image={require('../img/logo.jpg')}>
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
                title: 'HomePage'
            });
       }
       else{
           alert('Wrong information')
       }    
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#F50057'
    },
    logo:{
        alignSelf: 'stretch'
    },
    inputContainer:{
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderTopWidth:1,
        borderTopColor: '#F50057',    
    },
    input:{
        marginTop: 5,
        height:55,
        marginBottom: 10
    },
    button:{
        backgroundColor:'#F50057',
        fontFamily:'Lato'
    },
    buttonContainer:{
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: '#F50057',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    buttonText1:{
        fontSize: 16,
        textAlign: 'center',
        color: '#F50057'
    }
})

