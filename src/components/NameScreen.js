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
                    
                    <TouchableOpacity onPress={() => fc()}>
                    <Image
                      source={{ uri: images[index].img }}
                       style={{ width: 550, height: 550, marginBottom: 10 }}
                        resizeMode="contain"
                    />
                   
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, marginBottom: 10, color: 'white'}}>{images[index].name }</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Button title="Prev" onPress={prev} />
                    <Button title="Next" onPress={next} />
                    </View>
        </View>
       
        // <ImageBackground source={require('../img/background.jpg')} style={styles.bg} >
        //     <View style={{flex: 1, alignItems: 'center'}}>
          

        //             {/* <TouchableOpacity onPress={() => navigation.navigate('Details')}> */}
        //             <Image style={{ width: 350, height : 450, marginBottom: 20 }} source={{ uri: images.img }}/>
        //             {/* </TouchableOpacity> */}


        //             <Text style={{fontSize:20, color: 'white', textAlign:'center', marginBottom: 20}}>{images.name}</Text>
        //             <View>
        //             <Button style={{marginBottom: 20}}>Favourite</Button>
        //             </View>
        //             {
        //                 clicked &&
        //                 <i className="ri-heart-line favorite"></i>
                
        //             }
        //             {
        //                 clicked &&
        //                 <i className="ri-heart-line favorite"></i>
        //             }
        // </View>
        // </ImageBackground>


    )
}




export default NameScreen
