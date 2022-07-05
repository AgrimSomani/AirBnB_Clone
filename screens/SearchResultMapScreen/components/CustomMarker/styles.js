import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    notSelectedMarkerContainer:{
        borderWidth:1,
        padding:5,
        borderRadius:20,
        backgroundColor:'white',
        borderColor:'grey'
    },
    selectedMarkerContainer:{
        borderWidth:1,
        padding:5,
        borderRadius:20,
        backgroundColor:'black',
        borderColor:'grey'
    },
    notSelectedMarkerText:{
        fontWeight:'bold',
    },
    selectedMarkerText:{
        color:'white',
        fontWeight:'bold'
    }
})

export default styles