import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Splashscreen from './Src/Splashscreen'
import Navigation from './Src/Navigation'

export default function App() {
    const [isLooad, setIsLoad] =useState(true)
    setTimeout(()=>{
        setIsLoad(false)
    },2000)
  return (

    <>
   
    {
        isLooad ? <Splashscreen/> :<Navigation/>
    }
    </>
    
    
  )
}

