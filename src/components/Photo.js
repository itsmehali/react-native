import React, {useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native'

import Item from './Item'

const Photo = ({items}) => {
    
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            {items.map((item) => (
               <Item key={item.char_id} item={item}></Item>
            ))}
        </View>
    )
}

export default Photo
