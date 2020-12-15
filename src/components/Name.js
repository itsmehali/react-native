import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, FlatList} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';



const Name = ({items}) => {
    const [index, setindex] = useState(0)

    const fc = () => {
        console.log('clicked');
    }
    return (
        

        <ImageBackground source={require('../img/background.jpg')} style={styles.bg} >
            <View style={{flex: 1, alignItems: 'center'}}>
            {items.map((item) => (
                    <TouchableOpacity onPress={() => fc()}>

                    <Image style={{ width: 350, height: 450 }} source={{ uri: item.img }} />
        
                    </TouchableOpacity>

            //      <div className='card'>
            //      <div className='card-inner'>
            //        <div className='card-front'>
            //          <img src={item.img} alt='' />
            //        </div>
            //      </div>
            //    </div>
                //<Text style={{fontSize: 30, color: 'white'}}>{item.name}</Text>
                //    <Item key={item.char_id} item={item}></Item>
            ))}
        </View>
        </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    }
  });

export default Name
