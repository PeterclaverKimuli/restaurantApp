import React from 'react'
import {Image, NativeModules, Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert} from "react-native"
import {Dropdown} from 'react-native-material-dropdown'
import { TextField } from 'react-native-material-textfield' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ConfirmDialog } from 'react-native-simple-dialogs'
import ImagePicker from 'react-native-image-crop-picker';

const data = [{
    value: 'Owner'
},{
    value: 'Manager'
},{
    value: 'Waiter'
},{
    value: 'Waiteress'
}]

const gender = [{
    value: 'Male'
},{
    value: 'Female'
}]

const branches = [{
    value: 'Branch 1'
},{
    value: 'Branch 2'
},{
    value: 'Branch 3'
},{
    value: 'Branch 4'
}]

export default class InputInfoScreen extends React.Component{
  static navigatorStyle = {
    navBarBackgroundColor: '#F50057',
    navBarTextColor: '#FFF',
    statusBarColor: '#F50057'
  }

  constructor(props) {
    super(props);
    this.state = {firstname: null, lastname:null, phonenumber:null,
                  email: '', role:null, branch:null, birthday:null,
                  address:null, username:null, password:null, password1:null,
                  image:null, gender:null};
    
    this.props.navigator.setDrawerEnabled({
        side: 'left', 
        enabled: true
    });

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFirstname = this.onSubmitFirstname.bind(this);
    this.onSubmitLastname = this.onSubmitLastname.bind(this);
    this.onSubmitBirthday = this.onSubmitBirthday.bind(this);
    this.onSubmitRole = this.onSubmitRole.bind(this);
    this.onSubmitBranch = this.onSubmitBranch.bind(this);
    this.onSubmitGender = this.onSubmitGender.bind(this);
    this.onSubmitUsername = this.onSubmitUsername.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onSubmitPassword1 = this.onSubmitPassword1.bind(this);
    this.onSubmitAddress = this.onSubmitAddress.bind(this);      
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);     
    this.onSubmitEmail = this.onSubmitEmail.bind(this);    
    
    this.firstnameRef = this.updateRef.bind(this, 'firstname');
    this.lastnameRef = this.updateRef.bind(this, 'lastname');
    this.birthdayRef = this.updateRef.bind(this, 'birthday');
    this.addressRef = this.updateRef.bind(this, 'address');
    this.roleRef = this.updateRef.bind(this, 'role');
    this.branchRef = this.updateRef.bind(this, 'branch');
    this.genderRef = this.updateRef.bind(this, 'gender');
    this.usernameRef = this.updateRef.bind(this, 'username');
    this.passwordRef = this.updateRef.bind(this, 'password');
    this.password1Ref = this.updateRef.bind(this, 'password1');
    this.phoneNumberRef = this.updateRef.bind(this, 'phonenumber');
    this.emailRef = this.updateRef.bind(this, 'email');
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

 onSubmitFirstname() {
    this.lastname.focus();
  }

  onSubmitLastname() {
    this.birthday.focus();
  }

  onSubmitBirthday() {
    this.address.focus();
  }

  onSubmitAddress() {
    this.role.focus();
  }

  onSubmitRole() {
    this.branch.focus();
  }

  onSubmitBranch(){
    this.gender.focus();
  }

  onSubmitGender(){
    this.username.focus();
  }

  onSubmitUsername(){
      this.password.focus()
  }

  onSubmitPassword(){
      this.password1.focus()
  }

  onSubmitPassword1(){
      this.phonenumber.focus()
  }

  onSubmitPhoneNumber(){
    this.email.focus()
  }

  onSubmitEmail(){
    this.email.blur()
  }

  updateRef(name, ref){
      this[name] = ref
  }

  onSubmit() {
    let errors = {};

    if(!this.state.firstname||!this.state.lastname||!this.state.role||
       !this.state.branch||!this.state.username||!this.state.password||!this.state.phonenumber){
        ['firstname', 'lastname','role', 'branch', 'username', 'password', 'phonenumber']
        .forEach((name) => {
            let value = this[name].value()
    
            if (!value) {
            errors[name] = name+' should not be empty'
            }
        });
    
        this.setState({ errors })
    }
    else if(this.state.password !==null && this.state.password.length < 6){
        ['password', 'password1']
        .forEach((name) => {
            let value = this[name].value()
            
            if('password' === name && value.length < 6){
                Alert.alert(
                    "Password too short!",
                    "Password should be more than six characters.",
                    [{text: 'OK'}]
                 )
                this.password.focus()
            }
        })
    }
    else if(this.state.password !== this.state.password1){
        Alert.alert(
            "Passwords mismatch!",
            "Please make sure that the passwords match.",
            [{text: 'OK'}]
         )
        this.password.focus() 
    }
    else{
        if(this.state.email !== ''){
            var emailId = this.state.email
            var atpos = emailId.indexOf('@')
            var dotpos = emailId.lastIndexOf('.')

            if((atpos<1 || (dotpos-atpos)<2)){
                Alert.alert(
                    "Invalid Email!",
                    "Please enter a valid email address.",
                    [{text: 'OK'}]
                    )
                this.email.focus() 
            }  
            else{
                Alert.alert(
                    "Success!",
                    "User has been successfully added.",
                    [{text: 'OK'}]
                ) 
                this.firstname.clear(); this.lastname.clear(); this.birthday.clear(); this.address.clear()
                this.username.clear(); this.password.clear(); this.password1.clear(); this.phonenumber.clear(); 
                this.email.clear()
            }   
        }else{
            Alert.alert(
                "Success!",
                "User has been successfully added.",
                [{text: 'OK'}]
            ) 
            this.firstname.clear(); this.lastname.clear(); this.birthday.clear(); this.address.clear()
            this.username.clear(); this.password.clear(); this.password1.clear(); this.phonenumber.clear(); 
            this.email.clear()
        } 
    }
 }

 openConfirm(show) {
    this.setState({ showConfirm: show })
 }

 optionNo() {
    this.openConfirm(false)
}

pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
      });
    }).catch(e => alert(e));
}

renderImage(image) {
    return <Image style={{width: 260, height: 150, resizeMode: 'contain'}} source={image} />
  }

  static navigatorButtons = {
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
    ]
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
    }
  }

  render(){ 
    let { errors = {} } = this.state;  

    return(
        <ScrollView style={styles.inputContainer} keyboardShouldPersistTaps='handled'>
            <ImageBackground source={this.state.image ? this.renderImage(this.state.image) : require('../img/avatar.png')} style={styles.userImage}>
                <TouchableOpacity style={{alignSelf:'flex-end', paddingRight:15, paddingTop:5}} onPress={() => this.openConfirm(true)}>
                    <MaterialIcons name="create" size={24} color={'#F50057'}/>
                </TouchableOpacity>
            </ImageBackground>

            <View style={{ height: 10 }}></View>

            <ConfirmDialog
                title="Change photo"
                visible={this.state.showConfirm}
                onTouchOutside={() => this.openConfirm(false)}
                positiveButton={{
                    title: "CANCEL",
                    onPress: () => this.optionNo()
                }} >
                <View>
                    <TouchableOpacity onPress={() => this.pickSingleWithCamera(true)}><Text style={{padding:10, fontSize:17}}>Take photo</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{padding:10, fontSize:17}}>Choose photo</Text></TouchableOpacity>
                </View>
            </ConfirmDialog>

            <View style={styles.inputStyle}>
                <View style={styles.actions}>
                    <Image source={require('../img/identity.png')} style={styles.ImageStyle}/>
                    <TextField label='Firstname'
                            ref = {this.firstnameRef}
                            onSubmitEditing = {this.onSubmitFirstname}
                            onFocus={this.onFocus}
                            returnKeyType =  "next" 
                            error={errors.firstname}
                            onChangeText={ (firstname) => this.setState({ firstname:firstname })}  
                            containerStyle={{flex:1}}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/identity.png')} style={styles.ImageStyle}/>
                    <TextField label='Lastname'
                            ref = {this.lastnameRef}
                            onSubmitEditing = {this.onSubmitLastname}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            error={errors.lastname}
                            onChangeText={ (lastname) => this.setState({ lastname:lastname })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/date.png')} style={styles.ImageStyle}/>
                    <TextField label='Birthday'
                            ref = {this.birthdayRef}
                            onSubmitEditing = {this.onSubmitBirthday}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            onChangeText={ (birthday) => this.setState({ birthday:birthday })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/address.png')} style={styles.ImageStyle}/>
                    <TextField label='Address'
                            ref = {this.addressRef}
                            onSubmitEditing = {this.onSubmitAddress}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            onChangeText={ (address) => this.setState({ address:address })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                
                <View style={styles.actions}>
                    <Dropdown label='Role'
                            ref = {this.roleRef}
                            onSubmitEditing = {this.onSubmitRole}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            error={errors.role}
                            onChangeText={ (role) => this.setState({ role:role})} 
                            data = {data}
                            containerStyle={styles.inputNoImage}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                
                <View style={styles.actions}>
                    <Image style={styles.ImageStyle}/>
                    <Dropdown label='Branch'
                            ref = {this.branchRef}
                            onSubmitEditing = {this.onSubmitBranch}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            error={errors.branch}
                            onChangeText={ (branch) => this.setState({ branch:branch })} 
                            data = {branches}
                            containerStyle={styles.inputNoImage}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image style={styles.ImageStyle}/>
                    <Dropdown label='Gender'
                            ref = {this.genderRef}
                            onSubmitEditing = {this.onSubmitGender}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            error={errors.gender}
                            onChangeText={ (gender) => this.setState({ gender:gender })} 
                            data = {gender}
                            containerStyle={styles.inputNoImage}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <TextField label='Username'
                            ref = {this.usernameRef}
                            onSubmitEditing = {this.onSubmitUsername}
                            onFocus={this.onFocus}
                            title = 'name to be used to login.'
                            titleTextStyle={styles.titleText}
                            returnKeyType = { "next" }
                            error={errors.username}
                            onChangeText={ (username) => this.setState({ username:username })} 
                            containerStyle={styles.inputNoImage}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/lock.png')} style={styles.ImageStyle}/>
                    <TextField label='Password'
                            secureTextEntry={true} 
                            ref = {this.passwordRef}
                            onSubmitEditing = {this.onSubmitPassword}
                            onFocus={this.onFocus}
                            title = 'must be 6 or more characters.'
                            titleTextStyle={styles.titleText}
                            returnKeyType = { "next" }
                            error={errors.password}
                            clearTextOnFocus={true}
                            characterRestriction={20}
                            onChangeText={ (password) => this.setState({ password:password })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/lock.png')} style={styles.ImageStyle}/>
                    <TextField label='Re-enter Password'
                            secureTextEntry={true} 
                            ref = {this.password1Ref}
                            onSubmitEditing = {this.onSubmitPassword1}
                            onFocus={this.onFocus}
                            title = 'must be the same as the one above.'
                            titleTextStyle={styles.titleText}
                            returnKeyType = { "next" }
                            clearTextOnFocus={true}
                            characterRestriction={20}
                            onChangeText={ (password1) => this.setState({ password1:password1 })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/phone.png')} style={styles.ImageStyle}/>
                    <TextField label='Phone number'
                            ref = {this.phoneNumberRef}
                            onSubmitEditing = {this.onSubmitPhoneNumber}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            error={errors.phonenumber}
                            onChangeText={ (phonenumber) => this.setState({ phonenumber:phonenumber })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'
                            keyboardType="phone-pad"/>
                </View>

                <View style={styles.actions}>
                    <Image source={require('../img/email.png')} style={styles.ImageStyle}/>
                    <TextField label='Email'
                            ref = {this.emailRef}
                            onSubmitEditing = {this.onSubmitEmail}
                            onFocus={this.onFocus}
                            returnKeyType = { "next" }
                            onChangeText={ (email) => this.setState({ email:email })} 
                            containerStyle={styles.input}
                            tintColor="#F50057"
                            textColor="#F50057"
                            baseColor = '#000'
                            keyboardType="email-address"/>
                </View>
            </View>

            <TouchableOpacity onPress = {this.onSubmit} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </ScrollView>
    )
  }

    
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderLeftWidth:1,
        borderLeftColor: '#F50057',
        marginLeft: 10,
        marginRight: 10,
        borderRightWidth:1,
        borderRightColor: '#F50057'    
    }, 
    userImage:{
        marginTop:5, 
        width:260, 
        height:150, 
        alignSelf:'center', 
        marginLeft: 15
    },
    inputStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        marginTop: 10,
    },
    ImageStyle: {
        padding: 10,
        marginTop: 22,
        marginRight: 20,
        height: 25,
        tintColor: '#F50057',
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    input:{
        flex:1,
        height:55,
        marginBottom: 10,
    },
    inputNoImage:{
        flex:1,
        height: 80,
        marginLeft: 42,
        marginBottom: 10
    },
    buttonContainer:{
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: '#F50057',
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 30,
        borderRadius: 5,
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
    },
    titleText:{
        fontStyle:'italic'
    }
})
