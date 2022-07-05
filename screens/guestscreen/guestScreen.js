import react,{useState} from 'react'
import {View,Text,Pressable} from 'react-native'
import Entype from 'react-native-vector-icons/Entypo'
import styles from './styles'
import GuestRows from './components/guestrow/guestRow'
import { useNavigation } from '@react-navigation/native'
import ExploreNavigator from '../../navigation/exploreNavigator'

const GuestScreen = props => {
    const navigation = useNavigation()
    const [guests,setGuests] = useState(null)

    return(
        <View style={styles.container}>
            <GuestRows changeGuests = {setGuests}/>
            <Pressable style={styles.button} onPress={()=> navigation.navigate('Home', {
                screen:'Explore',
                params:{
                    screen:'SearchResults',
                    params:{
                        guests:guests
                    }
                }
            })}>
                <Text style={styles.buttonText}>Search</Text>
            </Pressable>
        </View>
    )
}

export default GuestScreen

/*<View style={styles.headerContainer}>
<Pressable style={styles.backIconContainer}>
<Entype name={'home'} size={20}/>
</Pressable>
<View style={styles.headerTextContainer}>
<Text style={styles.locationText}>a</Text>
<Text style={styles.durationText}>a</Text>
</View>
</View>*/

