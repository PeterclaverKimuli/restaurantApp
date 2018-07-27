import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF', 
        flex:1
    },
    img:{
        flex: 0.4,
        justifyContent: 'flex-end',
        marginLeft:0,
        marginBottom: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#F50057',
    },
    branchContainer:{
        borderTopWidth: 0.5,
        borderTopColor: '#F50057',  
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