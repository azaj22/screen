import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Image ,Button,TouchableOpacity} from "react-native";
import { Colors } from "react-native-paper";

const UselessTextInput = () => {
  
  return (
    <>

    <SafeAreaView style={{ flex:1,backgroundColor:"white" ,alignItems:"center"}}>
      <Text style={{fontSize:25}}> Profile</Text>
      <Image
        style={{height:100,width:100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={{fontSize:25,color:"#FA2A55"}}> Say hello to  your  new App</Text>
      
      <TouchableOpacity>
            <Text style = {styles.button}>
               Log In
            </Text>
         </TouchableOpacity>
<TouchableOpacity  onPress={() => navigation.navigate('Splashscreen')}>
            <Text style = {styles.button} >
               Sign Up
            </Text>
         </TouchableOpacity>
         
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:350,
    margin: 15,
    borderWidth: 1,
    padding: 12,
    borderRadius:20,
  
    backgroundColor:"pink"
  },

  button: {
    height: 40,
    width:300,
    margin: 15,
    borderWidth: 0,
    padding: 12,
    borderRadius:20,
  
    backgroundColor:"#FA2A55",
    

 }
});

export default UselessTextInput;