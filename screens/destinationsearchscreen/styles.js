import react from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:'#d4d4d4',
        paddingVertical:15,
    },
    mapIconContainer:{
        backgroundColor:'#d4d4d4',
        borderRadius:10,
        padding:10,
        marginRight:15,
    },
    textInput:{
        fontSize:18,
    }
})

export default styles