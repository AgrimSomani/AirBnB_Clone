import react from "react"
import {Marker} from 'react-native-maps'
import {View,Text} from 'react-native'
import styles from "./styles"

const CustomMarker = props => {
    const {coordinate,price,onPress,selected} = props;
    return(
        <Marker
            coordinate={coordinate}
            onPress ={onPress}
        >
            <View style={selected? styles.selectedMarkerContainer : styles.notSelectedMarkerContainer}>
                <Text style={selected? styles.selectedMarkerText : styles.notSelectedMarkerText}>${price}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker