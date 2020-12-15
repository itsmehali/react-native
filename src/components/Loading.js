import React from 'react'
import {ActivityIndicator, ImageStore, View} from "react-native"


const Loading = () => {
            return(
                <View style={{flex:1, justifyContent: 'center'}}>
                    <ActivityIndicator color='#0000ff'/>
                </View>
            )
}

export default Loading
