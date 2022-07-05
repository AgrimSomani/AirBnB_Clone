import react from "react";
import { View, Text , Image,Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'


const CarouselItem = props => {
    const navigation = useNavigation()
    const {item} = props
    
    const navigateToAccomodationScreen = props => {
        navigation.navigate('Accomodation', {postId:item.id})
    }

    return(
        <Pressable style={styles.container} onPress={navigateToAccomodationScreen}>
            <Image style={styles.image} source={{uri:item.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.bedText}>{item.bed} bed {item.bedroom} bedroom</Text>
                <Text style={styles.descriptionText}>{item.title}</Text>
                <Text style={styles.descriptionText}>
                    <Text style = {styles.newPriceText}>${item.newPrice} </Text>
                    / night
                </Text>
            </View>
        </Pressable>
    )
}

export default CarouselItem