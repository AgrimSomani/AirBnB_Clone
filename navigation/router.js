import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/destinationsearchscreen/screen'
import GuestScreen from '../screens/guestscreen/guestScreen'
import HomeTabNavigator from './HomeTabNavigator'
import AccomodationScreen from '../screens/AccomodationScreen'

const Stack = createStackNavigator()

const Router = props => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component = {HomeTabNavigator}
                    options={
                        {
                            headerShown:false,
                            title: 'Search your Destination'
                        }
                    }
                />
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title:'Search Your Destination'
                    }}
                />
                <Stack.Screen
                    name={"Guest"}
                    component={GuestScreen}
                    options={{
                        title:'How many People?'
                    }}
                />
                <Stack.Screen
                    name={"Accomodation"}
                    component={AccomodationScreen}
                    options={{
                        title:'Accomodation'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router