import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextField } from 'react-native-material-textfield' 
import DatePicker from 'react-native-datepicker'
import {addSectionItems} from '../helper'

export default class AddMenuItemScreen extends Component {
  static navigatorStyle = {
      navBarHidden: true,
      statusBarColor: '#F50057',
      }

  constructor(props) {
      super(props);
      this.state = {date:null, type:null, item:null, price:null};

      this.onFocus = this.onFocus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onSubmitType = this.onSubmitType.bind(this);
      this.onSubmitItem = this.onSubmitItem.bind(this);
      this.onSubmitPrice = this.onSubmitPrice.bind(this);

      this.typeRef = this.updateRef.bind(this, 'type');
      this.itemRef = this.updateRef.bind(this, 'item');
      this.priceRef = this.updateRef.bind(this, 'price');
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

 onSubmitType() {
    this.item.focus();
  }

  onSubmitItem() {
    this.price.focus();
  }

  onSubmitPrice() {
    this.price.blur();
  }

  updateRef(name, ref){
    this[name] = ref
  }

  onSubmit = () => {
    let errors = {};

    if(!this.state.type || !this.state.item || !this.state.price){
        ['type','item', 'price']
        .forEach((name) => {
            let value = this[name].value()
    
            if (!value) {
            errors[name] = name+' should not be empty'
            }
        });
    
        this.setState({ errors })
    }else{
        if(!this.state.date){
            Alert.alert(
                "Alert!",
                "Date is missing.",
                [{text: 'OK'}]
            ) 
        }else{
            addSectionItems(this.state.date, this.state.type, this.state.item, this.state.price)
            Alert.alert(
                "Success!",
                "Item has been successfully added.",
                [{text: 'OK'}]
            ) 
            this.type.clear(); this.item.clear(); this.price.clear();
        }
    } 
 }

  render() {
    let { errors = {} } = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={{marginTop:10}}>  
            <DatePicker
                    style={{width: 220}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1900"
                    maxDate="01-01-2100"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: -6,
                            top: 4,
                            marginLeft: 3
                        },
                        dateInput: {
                            marginLeft: 41,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            borderBottomColor: '#aaa',
                            alignItems: 'flex-start'
                        }, 
                        dateText: {
                            color: '#000',
                            fontSize: 16
                        },
                        placeholderText: {
                            color: '#F50057',
                            fontSize: 16,
                        }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
            />
            <View style={styles.actions}>
                <TextField label='Menu type'
                        ref = {this.typeRef}
                        onSubmitEditing = {this.onSubmitType}
                        onFocus={this.onFocus}
                        returnKeyType = { "next" }
                        error={errors.type}
                        onChangeText={ (type) => this.setState({ type:type })} 
                        title = 'eg breakfast, lunch, drinks, etc'
                        titleTextStyle={styles.titleText}
                        autoCapitalize = {'words'}
                        containerStyle={styles.input}
                        tintColor="#F50057"
                        textColor="#000"
                        baseColor = '#F50057'/>
            </View>
            <View style={styles.actions}>
                <TextField label='Menu item'
                        ref = {this.itemRef}
                        onSubmitEditing = {this.onSubmitItem}
                        onFocus={this.onFocus}
                        returnKeyType = { "next" }
                        error={errors.item}
                        onChangeText={ (item) => this.setState({ item:item })} 
                        containerStyle={styles.input}
                        tintColor="#F50057"
                        textColor="#000"
                        baseColor = '#F50057'/>
            </View>
            <View style={styles.actions}>
                <TextField label='Price'
                        ref = {this.priceRef}
                        onSubmitEditing = {this.onSubmitPrice}
                        onFocus={this.onFocus}
                        returnKeyType = { "next" }
                        error={errors.price}
                        onChangeText={ (price) => this.setState({ price:price })} 
                        containerStyle={styles.input}
                        tintColor="#F50057"
                        textColor="#000"
                        baseColor = '#F50057'
                        keyboardType="numeric"/>
            </View>
            <TouchableOpacity onPress = {this.onSubmit} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }

  goToManagers = () =>{
    this.props.navigator.dismissLightBox();

    this.props.navigator.push({
        screen: 'restaurantApp.Managers',
        title: 'Managers'
    });           
  }
  goToWaiters = () =>{
    this.props.navigator.dismissLightBox();

    this.props.navigator.push({
        screen: 'restaurantApp.Waiters',
        title: 'Waiters',
    });         
  }
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.8,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      padding: 16
    },

    heading:{
        flexDirection:'row', 
        justifyContent:'center',
        borderBottomWidth: 0.5, 
        paddingBottom: 5
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#F50057'
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        marginTop: 10,
    },

    input:{
        flex:1,
        height:55,
        marginBottom: 10,
    },

    buttonContainer:{
        alignSelf: 'stretch',
        marginTop: 25,
        padding: 20,
        backgroundColor: '#F50057',
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 10,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    titleText:{
        fontStyle:'italic',
    }
})