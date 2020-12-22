import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Modal, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Button from './src/components/Button'
import { ImagesProvider } from './src/utils/ImagesContext'

import Navigation from './src/config/navigation'

import NameScreen from './src/components/NameScreen'
import DetailsScreen from './src/components/DetailsScreen'

const Tab = createBottomTabNavigator()
const NameStack = createStackNavigator()


const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
  
  return (
    


    <SafeAreaView>
      <StatusBar style="auto" />
      <ImagesProvider>
        
        <Modal visible={modalOpen} animationType='slide'>
          <View  style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black'}}>More details about:</Text>
            <DetailsScreen/>
            <Button 
             title="Close"
            color="#f194ff"
          onPress={() => setModalOpen(false)}
          />
          </View>
        </Modal>
      <Button 
         title="More"
         color="#f194ff"
         onPress={() => setModalOpen(true)}
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <NameScreen/>
        </View>
      {/* <NavigationContainer>
      <NameStack.Navigator>
        <NameStack.Screen name="NamesList" component={NameScreen} />
        <NameStack.Screen name="DetailsList" component={DetailsScreen} />
    </NameStack.Navigator>
      </NavigationContainer> */}
      </ImagesProvider>
      <ImageBackground source={require('./src/img/background.jpg')} style={styles.bg} />
    </SafeAreaView>

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

