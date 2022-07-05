import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PostScreen from '../screens/posts/postscreen'
import SearchResultMapScreen from '../screens/SearchResultMapScreen/index'
import { useRoute } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = props => {

    const route = useRoute();
    const {guests} = route.params;

    return( 
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor :'#f15454'
            }
        }}>
            <Tab.Screen name={'List'}>
                {()=> (<PostScreen guests={guests}/> )}
            </Tab.Screen>
            <Tab.Screen name ={'Map'}>
                {() => (<SearchResultMapScreen guests={guests}/>)}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator