import React, {useState, useEffect, Fragment} from 'react'
import {View, Text, ActivityIndicator, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import DetailsScreen from './DetailsScreen'
import { useImages } from '../hooks/useImages'
import Button from './Button'
import {useFavourites} from '../hooks/useFavourites'


const NameScreen = ({title,navigation}) => {
    const { favourites, add, remove } = useFavourites()
    const [clicked, setClicked] = useState(false)
    const { images, next, prev, index } = useImages()



    const fc = () => {
        console.log('clicked');
        setClicked(true)
    }

    const favourite = (id) => {
      add(id)
    }
  
    const unfavourite = (id) => {
      remove(id)
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
                    
                    <Text style={{ fontSize: 30, marginBottom: 10, color: 'white', paddingBottom: 500, paddingTop:15}}>{images[index].name }</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Button title="Prev" onPress={prev} />
                    {favourites.includes(images[index].char_id) ? (
                    <Button
                      title="Unfavourite"
                      onPress={() => unfavourite(images[index].char_id)}
                     />
                    ) : (
                    <Button
                    title="Favourite"
                     onPress={() => favourite(images[index].char_id)}
                    />
        )}
                    <Button title="Next" onPress={next} />
                    </View>
        </View>

    )
}




export default NameScreen
