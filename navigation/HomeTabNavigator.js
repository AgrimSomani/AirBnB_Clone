import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/homescreen/homescreen'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ExploreNavigator from './exploreNavigator'
import ProfileScreen from '../screens/profileScreen'



const Tab = createBottomTabNavigator()

const HomeTabNavigator = props => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name={'Explore'}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: () => (
                        <Fontisto name={'search'} size={20} color={"#f15454"}/>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name={'Saved'}
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name={'heart-o'} size={20} color={"#f15454"}/>
                    ), 
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name={'Airbnb'}
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name={'airbnb'} size={20} color={"#f15454"}/>
                    ), 
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name={'Messages'}
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Feather name={'message-square'} size={20} color={"#f15454"}/>
                    ), 
                    headerShown: false
                }}
            />
             <Tab.Screen 
                name={'Profile'}
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <EvilIcons name={'user'} size={25} color={"#f15454"}/>
                    ), 
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator