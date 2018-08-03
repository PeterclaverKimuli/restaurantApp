import React from 'react'
import {Alert,
        Text, 
        View, 
        TouchableOpacity,
        TouchableHighlight} from "react-native"
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
        this.state = {username: null, password:null,language: null, textuser:null, textpass:null};
        
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: false
        });

        this.onFocus = this.onFocus.bind(this);
        this.Login = this.Login.bind(this);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);

        this.usernameRef = this.updateRef.bind(this, 'username');
        this.passwordRef = this.updateRef.bind(this, 'password');
    }

    onFocus() {
        let { errors = {} } = this.state;
  
        for (let name in errors) {
          let ref = this[name];
  
          if (ref && ref.isFocused()) {
            delete errors[name];
          }
        }
  
        this.setState({ errors });
    }

    onSubmitUsername() {
      this.password.focus();
    }

    onSubmitPassword() {
      this.password.blur();
    }

    updateRef(name, ref) {
      this[name] = ref;
    }

    render(){
        let { errors = {} } = this.state;

        return(
            <View style={styles.container}>
               <Card image={require('../img/logo.jpg')}>
                    <View style={styles.inputContainer}>
                        <TextField label='username' 
                                   ref={this.usernameRef}
                                   keyboardType='email-address'
                                   onChangeText={ (name) => this.setState({ username:name })}  
                                   containerStyle={styles.input}
                                   onFocus={this.onFocus}
                                   returnKeyType = { "next" }
                                   autoCapitalize = {'none'}
                                   onSubmitEditing={this.onSubmitUsername}
                                   blurOnSubmit={false}
                                   error={errors.username}
                                   errorColor='#0D47A1'/>

                        <TextField secureTextEntry={true} 
                                   label='password'
                                   clearTextOnFocus={true}
                                   onFocus={this.onFocus}
                                   onSubmitEditing={this.onSubmitPassword}
                                   error={errors.password}
                                   errorColor='#0D47A1'
                                   onChangeText={ (pass) => this.setState({ password:pass })} 
                                   containerStyle={styles.input}
                                   characterRestriction={20}
                                   ref={this.passwordRef}/>

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
                animated: true, 
                animationType: 'fade'
            });
            this.username.clear()
            this.password.clear()
        }
       else{
        let errors = {};
        
        ['username', 'password']
        .forEach((name) => {
            let value = this[name].value();

            if (!value) {
            errors[name] = name+' should not be empty';
            } 
            else{
                if(('username'===name && value !=='john') || 
                    ('password'===name && value !=='kimuli')){
                    errors[name] = name+' is wrong'
                }
            }
        });

        this.setState({ errors }); 
       } 
        
    }
}

