import react from 'react'
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:'5%',
        marginVertical:'5%',
    },
    image:{
        borderRadius:10,
        aspectRatio:3-2,
        marginBottom:'5%',
    },
    bedText:{
        color:'grey',
        fontSize:14,
    },
    descriptionText:{
        fontSize:20,
    },
    oldPriceText:{
        fontSize:20,
        color:'grey',
        textDecorationLine:'line-through',
        fontWeight:'bold',
    },
    newPriceText:{
        fontWeight:'bold',
        fontSize:20,
    },
    totalPriceText:{
        fontSize:16,
        textDecorationLine:'underline',
        color:'grey'
    }
})

export default styles