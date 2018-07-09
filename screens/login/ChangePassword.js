import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import {TextField} from 'react-native-material-textfield'

export default class ChangePasswordScreen extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#F50057',
        navBarTextColor: '#FFF',
        statusBarColor: '#F50057',
        navBarButtonColor: '#FFF'
    }  

    constructor(props){
        super(props)
        this.state = {oldpassword:null, newpassword:null, newpassword1:null}

        this.onFocus = this.onFocus.bind(this)
        this.Submit = this.Submit.bind(this)
        this.onSubmitOldPassword = this.onSubmitOldPassword.bind(this)
        this.onSubmitNewPassword = this.onSubmitNewPassword.bind(this)
        this.onSubmitNewPassword1 = this.onSubmitNewPassword1.bind(this)

        this.oldPasswordRef = this.updateRef.bind(this, 'oldpassword')
        this.newPasswordRef = this.updateRef.bind(this, 'newpassword')
        this.newPassword1Ref = this.updateRef.bind(this, 'newpassword1')
    }

    onFocus(){
        let {errors = {}} = this.state

        for(let name in errors){
            let ref = this[name]

            if(ref && ref.isFocused()){
                delete errors[name]
            }
        }
        this.setState({errors})
    }

    onSubmitOldPassword(){
        this.newpassword.focus()
    }

    onSubmitNewPassword(){
        this.newpassword1.focus()
    }

    onSubmitNewPassword1(){
        this.newpassword1.blur()
    }

    updateRef(name, ref){
        this[name] = ref
    }

    render(){
        let {errors = {}} = this.state

        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextField secureTextEntry={true}
                            label='Type the old password'
                            ref = {this.oldPasswordRef}
                            clearTextOnFocus={true}
                            onChangeText={ (name) => this.setState({ oldpassword:name })}  
                            containerStyle={styles.input}
                            textColor = '#FFF'
                            baseColor = '#FFF'
                            tintColor = '#FFF'
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            onSubmitEditing={this.onSubmitOldPassword}
                            blurOnSubmit={false}
                            characterRestriction={20}
                            error={errors.oldpassword}
                            errorColor='#0D47A1'/>

                    <TextField secureTextEntry={true} 
                                   label='Type the new password'
                                   clearTextOnFocus={true}
                                   onFocus={this.onFocus}
                                   returnKeyType = { "next" }
                                   textColor = '#FFF'
                                   baseColor = '#FFF'
                                   tintColor = '#FFF'
                                   title = '6 or more characters.'
                                   onSubmitEditing={this.onSubmitNewPassword}
                                   error={errors.newpassword}
                                   errorColor='#0D47A1'
                                   onChangeText={ (pass) => this.setState({ newpassword:pass })} 
                                   containerStyle={styles.input}
                                   characterRestriction={20}
                                   ref={this.newPasswordRef}/>

                    <TextField secureTextEntry={true} 
                                   label='Re-type the new password'
                                   clearTextOnFocus={true}
                                   onFocus={this.onFocus}
                                   returnKeyType = { "next" }
                                   textColor = '#FFF'
                                   baseColor = '#FFF'
                                   tintColor = '#FFF'
                                   onSubmitEditing={this.onSubmitNewPassword1}
                                   error={errors.newpassword1}
                                   errorColor='#0D47A1'
                                   onChangeText={ (pass) => this.setState({ newpassword1:pass })} 
                                   containerStyle={styles.input}
                                   characterRestriction={20}
                                   ref={this.newPassword1Ref}/>
                    <TouchableOpacity onPress = {this.Submit} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    Submit = () => {
        
        let errors = {};

        if(!this.state.oldpassword || !this.state.newpassword || !this.state.newpassword1){
            ['oldpassword', 'newpassword', 'newpassword1']
            .forEach((name) => {
                let value = this[name].value();
    
                if (!value) {
                    errors[name] = 'cannot be empty';
                }
            })
            this.setState({errors})
        }
        else if(this.state.oldpassword !== 'kimuli'){
            
            errors['oldpassword'] = 'wrong password'
                
            this.setState({errors})
        }
        else if((this.state.newpassword !== null && this.state.newpassword.length < 6) ||
                 (this.state.newpassword1 !== null && this.state.newpassword1.length < 6)){
            ['newpassword', 'newpassword1']
            .forEach((name) => {
                let value = this[name].value()
    
                if (('newpassword' === name && value.length < 6) ||
                    ('newpassword1' === name && value.length < 6)) {
                    errors[name] = 'Too short'
                }
            })
            this.setState({ errors })
        }
        else if(this.state.newpassword !== this.state.newpassword1){
            Alert.alert(
                'Password mismatch',
                'The new passwords dont match',
                [{text: 'OK'}]
            )
            this.newpassword.focus()
        }
        else{
            Alert.alert(
                'Success',
                'Your password has been changed',
                [{text: 'OK'}]
            )
            this.newpassword.focus()
        }
         
         
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#FF4081',
    },
    inputContainer:{
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        alignSelf: 'stretch',   
    },
    input:{
        marginTop: 5,
        height:55,
        marginBottom: 10,
    },
    buttonContainer:{
        alignSelf: 'stretch',
        margin: 20,
        marginTop: 30,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F50057'
    },
})
