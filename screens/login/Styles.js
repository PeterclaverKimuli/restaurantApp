import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#F50057'
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

export default styles;