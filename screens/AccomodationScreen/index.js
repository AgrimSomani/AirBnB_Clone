import react from "react"
import {View,Text} from 'react-native'
import styles from "./styles"
import Posts from "./components/posts/posts"
import places from "../../Airbnb Assets/feed"
import { useRoute } from "@react-navigation/native"

const AccomodationScreen = props => {
    const route = useRoute()

    return(
        <View>
            <Posts item ={places.find((place)=> place.id === route.params.postId )} />
        </View>
    )
}

export default AccomodationScreen