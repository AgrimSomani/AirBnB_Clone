import react,{useState} from 'react'
import {Pressable, View, Text} from 'react-native'
import styles from './styles'

const GuestRows = props => {

    const [adults,setAdults] = useState('0')
    const [children,setChildren] = useState('0')
    const [infants,setInfants] = useState('0')

    props.changeGuests(parseInt(adults)+parseInt(children))

    return(
        <View>
            <View style={styles.rowContainer}>
                <View style ={styles.textContainer}>
                    <Text style = {styles.typeOfGuestText}>Adults</Text>
                    <Text style={styles.ageOfGuestText}>Ages 13 or above</Text>
                </View>
                <View style={styles.numberOfGuestContainer}>
                    <Pressable style={styles.button} onPress={()=> setAdults(Math.max(0,parseInt(adults)-1))}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                    <Text style={styles.numberText}>{adults}</Text>
                    <Pressable style={styles.button} onPress={()=> setAdults(parseInt(adults)+1)} >
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style ={styles.textContainer}>
                    <Text style = {styles.typeOfGuestText}>Children</Text>
                    <Text style={styles.ageOfGuestText}>Ages 2-12</Text>
                </View>
                <View style={styles.numberOfGuestContainer}>
                    <Pressable style={styles.button} onPress={()=> setChildren(Math.max(0,parseInt(children)-1))} >
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                    <Text style={styles.numberText}>{children}</Text>
                    <Pressable style={styles.button} onPress={()=> setChildren(parseInt(children)+1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style ={styles.textContainer}>
                    <Text style = {styles.typeOfGuestText}>Infants</Text>
                    <Text style={styles.ageOfGuestText}>Under 2</Text>
                </View>
                <View style={styles.numberOfGuestContainer}>
                    <Pressable style={styles.button} onPress={()=> setInfants(Math.max(0,parseInt(infants)-1))}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                    <Text style={styles.numberText}>{infants}</Text>
                    <Pressable style={styles.button} onPress={()=> setInfants(parseInt(infants)+1)} >
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GuestRows