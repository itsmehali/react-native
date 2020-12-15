import React, {useState} from 'react'
import {View, Image} from "react-native"
import Loading from './Loading'


const CharacterItem = ({ item }) => {

  return (
    // <View style={{flex:1, justifyContent: 'center'}}>
    // <Image source={{uri:item.[index].img}}/>
    // </View>
    <View>
      <Text>{item.name}</Text>
    </View>

    // <div className='card'>
    //   <div className='card-inner'>
    //     <div className='card-front'>
    //       <img src={item.img} alt='' />
    //     </div>
    //     <div className='card-back'>
    //       <h1>{item.name}</h1>
    //       <ul>
    //         <li>
    //           <strong>Actor Name:</strong> {item.portrayed}
    //         </li>
    //         <li>
    //           <strong>Nickname:</strong> {item.nickname}
    //         </li>
    //         <li>
    //           <strong>Birthday:</strong> {item.birthday}
    //         </li>
    //         <li>
    //           <strong>Status:</strong> {item.status}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}



export default CharacterItem
