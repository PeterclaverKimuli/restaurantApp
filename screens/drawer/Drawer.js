import React from 'react'
import {Alert, Text, View, Image, Button, TouchableOpacity, TouchableHighlight} from "react-native"

export default class DrawerScreen extends React.Component{
    static navigatorStyle = {
        navBarHidden: true
    }

    render(){
        return(
            <View style={{backgroundColor:'#FFF', flex:1}}>
                <View>
                    <Image source={require('../img/logo.jpg')} style={{width:220, height:100, marginLeft:25, marginTop:20}}/>
                </View>
                <View>
                    <Text h1>Halo</Text>
                </View>
            </View>
        )
    }
}

