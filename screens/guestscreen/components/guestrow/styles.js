import react from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItem:'center',
        padding:15,
        borderBottomWidth:2,
        borderColor:'lightgrey',
        marginHorizontal:15,
    },
    textContainer:{
        justifyContent:'center',
    },
    typeOfGuestText:{
        fontSize:15,
        fontWeight:'bold'
    },
    ageOfGuestText:{
        color:'grey',
    },
    numberOfGuestContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth:1.5,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        fontSize:16,
        width:50,
        textAlign:'center'
    },  
    buttonText:{
        fontSize:20,
        color:'black',
    }

})

export default styles