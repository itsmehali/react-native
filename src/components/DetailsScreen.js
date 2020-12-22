import React from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'

import { useImages } from '../hooks/useImages'

const DetailsScreen = () => {
    const { images, next, prev, index, asd } = useImages()

    return (
        <View>
            <Text style={{ fontSize: 25, marginBottom: 0, color: 'black'}}>{images[index].name}</Text>
            <Text style={{ fontSize: 20, marginBottom: 5, color: 'black'}}>Nickname: {images[index].nickname}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black'}}>Birthday: {images[index].birthday}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black'}}>Occupation: {images[index].occupation}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black'}}>Status: {images[index].status}</Text>
            <Text style={{ fontSize: 20, marginBottom: 0, color: 'black'}}>Portrayed: {images[index].portrayed}</Text>
        </View>
    )
}

export default DetailsScreen
