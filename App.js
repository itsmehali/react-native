import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigator from './src/routes/nameStack'

import Name from './src/components/Name'

const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    useEffect(() => {
      const load = async () => {
        setIsLoading(true)
        const response = await fetch(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
  
        // console.log(result.data)
        const data = await response.json()
        setItems(data)
        setIsLoading(false)
        console.log(data);
      }
  
      load()
    }, [query])
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Name text="hello" items={items} />
    </SafeAreaView>
  );
}

export default App

