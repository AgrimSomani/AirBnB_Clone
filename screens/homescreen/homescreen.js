import react from "react";
import {Text, ImageBackground,Pressable,SafeAreaView} from 'react-native'

import SearchBar from "./components/searchbar/searchbar";
import styles from "./styles";



const HomeScreen = props => {
    return(
        <SafeAreaView>
            <SearchBar/>
            <ImageBackground
                source={require('../../assets/wallpaper.jpg')}
                style={styles.backgroundImage}
            >
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>            
        </SafeAreaView>
    )
}

export default HomeScreen