import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: 325,
        height:125,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5,
        borderRadius:10,
        overflow:'hidden'
    },
    image:{
        aspectRatio:1,
    },
    textContainer:{
        justifyContent:'space-evenly',
        height:'100%',
        backgroundColor:'white',
        flex:1,
        paddingLeft:5
    },
    bedText:{
        color:'grey',
        fontSize:14,
    },
    descriptionText:{
        fontSize:15,
    },
    newPriceText:{
        fontWeight:'bold',
        fontSize:18,
    },
    totalPriceText:{
        fontSize:16,
        textDecorationLine:'underline',
        color:'grey'
    }
})

export default styles