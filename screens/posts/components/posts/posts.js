import react from 'react'
import {Image, Text, View} from 'react-native'
import styles from './styles'


const Posts = (props) => {
    const item = props.item
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.item.image}}/>
            <Text style={styles.bedText}>{item.bed} bed . {item.bedroom} bedroom</Text>
            <Text style={styles.descriptionText}>{item.title}</Text>
            <Text style={styles.descriptionText}>
                <Text style={styles.oldPriceText}>${item.oldPrice}</Text>
                <Text style = {styles.newPriceText}>  ${item.newPrice} </Text>
                / night
            </Text>
            <Text style={styles.totalPriceText}>${item.totalPrice} total</Text>
        </View>
    )
}

export default Posts