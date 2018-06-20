import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF', 
        flex:1
    },
    img:{
        flex: 0.4,
        justifyContent: 'flex-end',
        width:220,
        marginLeft:25,
        marginBottom: 3,
    },
    branchContainer:{
        marginTop: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#F50057',  
    },
    branches:{
        fontSize: 15,
        padding: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    branch: {
        paddingLeft: 3,
        paddingTop: 10,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    action:{
        fontSize: 15,
        padding: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    actions: {
        paddingLeft: 3,
        paddingTop: 10,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }
})

export default styles;