import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import NameScreen from '../components/NameScreen'
import DetailsScreen from '../components/DetailsScreen'

const NameStack = createStackNavigator()
const NamesStackScreen = () => (
    <NameStack.Navigator>
        <NameStack.Screen name="NamesList" component={NameScreen} />
        <NameStack.Screen name="DetailsList" component={DetailsScreen} />
    </NameStack.Navigator>
)


export default () => (
    <NavigationContainer>
        <NamesStackScreen/>
    </NavigationContainer>
)