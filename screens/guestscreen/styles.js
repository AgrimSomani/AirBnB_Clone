import react from 'react'
import { StyleSheet } from 'react-native'

const styles= StyleSheet.create({
    container:{
        justifyContent:'space-between',
        flex:1,
    },
    rowsContainer:{
        borderWidth:1,
    },
    button:{
        marginBottom:50,
        backgroundColor:'#f15454',
        borderRadius:6,
        padding:10,
        marginHorizontal:15,
    },
    buttonText:{
        textAlign:'center',
        fontSize:18,
        color:'white'
    }
})

export default styles