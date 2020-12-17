import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Navigator from './src/routes/nameStack'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ImagesProvider } from './src/utils/ImagesContext'



import NameScreen from './src/components/NameScreen'
import DetailsScreen from './src/components/DetailsScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    // useEffect(() => {
    //   const load = async () => {
    //     setIsLoading(true)
    //     const response = await fetch(
    //       `https://www.breakingbadapi.com/api/characters?name=${query}`
    //     )
  
    //     // console.log(result.data)
    //     const data = await response.json()
    //     setItems(data)
    //     setIsLoading(false)
    //     console.log(data);
    //   }
  
    //   load()
    // }, [query])
  return (
    <ImageBackground source={require('./src/img/background.jpg')} style={styles.bg} >

    <NavigationContainer>

    <SafeAreaView>
      <StatusBar style="auto" />
      <ImagesProvider>
      {/* <Tab.Navigator>
          <Tab.Screen
          name="Name"
          component={NameScreen}
          options={{ title: 'Characters' }}
        />
          <Tab.Screen
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details' }}
        />
        </Tab.Navigator> */}
        <NameScreen/>
      </ImagesProvider>
     {/*} <NameScreen text="hello" items={items} />*/}
    </SafeAreaView>

    </NavigationContainer>
     </ImageBackground>
  );
}



const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});



export default App

