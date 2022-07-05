import React from "react";
import { Pressable, Text} from 'react-native'
import styles from "./styles";
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from "@react-navigation/native";

const SearchBar = props => {
    const navigation = useNavigation()

    return(
        <Pressable style={styles.container} onPress={() => navigation.navigate('Destination Search')}>
            <Fontisto name={'search'} size={16} color={"#f15454"}/>
            <Text style={styles.textInput}>Where are you going?</Text>               
        </Pressable>
    )
}

export default SearchBar