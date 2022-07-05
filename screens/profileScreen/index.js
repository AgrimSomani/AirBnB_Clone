import React from 'react';
import {View,Text,Pressable} from 'react-native'
import styles from './styles'
import { Auth } from'aws-amplify'

const ProfileScreen = props => {
    const signOut = () => {
        try{
            Auth.signOut();
        } 
        catch (error) {
            console.log('error signing out: ', error)
        }
    }

    return(
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={signOut}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen