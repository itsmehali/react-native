import React from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'

import { useImages } from '../hooks/useImages'

const DetailsScreen = () => {
    const { images, next, prev, index, asd } = useImages()

    return (
        <View style={{ paddingBottom: 20}}>
            <Text style={{ fontSize: 25, marginBottom: 0, color: 'black', fontWeight: 'bold', textAlign:"center"}}>{images[index].name}</Text>
            <Text style={{ fontSize: 20, marginBottom: 5, color: 'black',textAlign:"center"}}>Nickname: {images[index].nickname}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black',textAlign:"center"}}>Birthday: {images[index].birthday}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black',textAlign:"center"}}>Occupation: {images[index].occupation}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black',textAlign:"center"}}>Status: {images[index].status}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black',textAlign:"center"}}>Portrayed: {images[index].portrayed}</Text>
        </View>
    )
}

export default DetailsScreen
