import react from "react";
import {View} from 'react-native'
import styles from "./styles";
import SearchResultMap from "./components/SearchResultMap/SearchResultMap";


const SearchResultMapScreen = props => {
    return(
        <SearchResultMap guests = {props.guests}/>  
    )
}

export default SearchResultMapScreen