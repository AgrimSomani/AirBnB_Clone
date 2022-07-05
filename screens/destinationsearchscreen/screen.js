import react, {useState} from 'react'
import { TextInput, Text, View, FlatList,Image,Pressable } from 'react-native'
import styles from './styles'
import searchResult from '../../Airbnb Assets/search'
import Entype from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearchScreen = props => {

    const navigation = useNavigation()

    const RenderEachRow = ({item}) => {
        return(
            <View style={styles.rowContainer}>
                <View style={styles.mapIconContainer}>
                    <Entype name={'location-pin'} size = {24} />
                </View>
                <Text>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    navigation.navigate('Guest')
                }}
                query={{
                    key: 'AIzaSyBjqBkcAsW1xZhEZU5_5K1cRJfwYlK0Aws',
                    language: 'en',
                    type:'(cities)'
                }}
                suppressDefaultStyles
                styles={{
                    textInput:styles.textInput
                }}
                renderRow={(item) => <RenderEachRow item = {item}/>}
            />
        </View>
    )

}

export default DestinationSearchScreen