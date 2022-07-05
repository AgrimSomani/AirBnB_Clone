import react from "react";
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        borderRadius:25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        position:'absolute',
        top:25,
        zIndex:1,
        backgroundColor:'white',

    },
    textInput:{
        width:'40%',
        height:16,
        textAlign:'center',
        fontSize:14
    }
})

export default styles