import { View, StyleSheet, Button, Text, Image, ImageBackground } from 'react-native';
import * as React from 'react';

export const ProfileScreen: React.FC = () => {
    return (
      <View style={style.container}>
        <ImageBackground source={require('./../../assets/image.png')} style={style.image} >
          <Text style={style.text}>Fashion Sale</Text>
        </ImageBackground>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    view: {
        alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 40
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });