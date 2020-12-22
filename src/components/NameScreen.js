import React, {useState, useEffect, Fragment} from 'react'
import {View, Text, ActivityIndicator, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import DetailsScreen from './DetailsScreen'
import { useImages } from '../hooks/useImages'
import Button from './Button'


const NameScreen = ({title,navigation}) => {
    const [favourite, setFavourite] = useState(false)
    const [clicked, setClicked] = useState(false)
    const { images, next, prev, index, asd } = useImages()



    const fc = () => {
        console.log('clicked');
        setClicked(true)
    }

    if (images.length <= 0) {
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator color="#0000ff" />
          </View>
        )
      }


    return (
        
        <View style={{ flex: 1, alignItems: 'center' }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image
                      source={{ uri: images[index].img }}
                       style={{ width: 550, height: 550, marginBottom: 10 }}
                        resizeMode="contain"
                    />
                    </View>
                   
                    </TouchableOpacity>
                    
                    <Text style={{ fontSize: 30, marginBottom: 10, color: 'white'}}>{images[index].name }</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Button title="Prev" onPress={prev} />
                    <Button title="Next" onPress={next} />
                    </View>
        </View>

    )
}




export default NameScreen
