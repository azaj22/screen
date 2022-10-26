import { View, Image } from 'react-native'
import React from 'react'

export default function Splashscreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center',
     justifyContent: 'center' ,backgroundColor:'#FA2A55'}}>
     
      <Image
        style={{height:100,width:100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

