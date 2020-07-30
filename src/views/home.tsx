import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground, Alert } from 'react-native';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView >
      <View>
        <ImageBackground style={{height: 340}} source={require('./../../assets/image3.png')} >
          <View style={{paddingTop: 270}}>
            <TouchableOpacity onPress={() => Alert.alert('to new collection')}>
              <Text style={{color: 'white', fontSize: 34, textAlign: 'right', fontWeight: 'bold'}}>New collection</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{flexDirection: 'row', }}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{backgroundColor: '#1E1F28', flex: 1}}>
            <TouchableOpacity onPress={() => Alert.alert('summer sales')}>
              <Text style={{color: '#EF3651', fontSize: 34, fontWeight: 'bold', paddingLeft: 10, paddingTop: 30}}>Summer sale</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground style={{height: 180, width: 180}} source={require('./../../assets/image5.png')} >
              <TouchableOpacity onPress={() => Alert.alert('Black')}>
                <Text style={{paddingLeft: 10, paddingTop: 100, color: 'white', fontWeight: 'bold', fontSize: 34}}>Black</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View >
          <TouchableOpacity onPress={() => Alert.alert("Men's hats")}>
            <Image style={{height: 340, width: 180}} source={require('./../../assets/image4.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  
  text: {
    color: 'white',
    fontSize: 34
  },
  
});
