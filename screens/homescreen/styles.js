import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        justifyContent:'center',
        height:500,
        resizeMode:'cover'
    },
    title:{
        fontWeight:'bold',
        fontSize:90,
        width:'50%',
        color:'white',
        marginHorizontal:15,
        lineHeight: 90
    },
    button:{
        borderRadius:10,
        width:'50%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginHorizontal:15,
        marginVertical:10,
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:14
    }
})

export default styles