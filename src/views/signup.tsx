import  { ScrollView, StatusBar, Text, Alert } from 'react-native';
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Button} from '../components'

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Sign Up</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 40,
        color: '#F7F7F7'
    }
})

const Footer: React.FC = () => {
    return (
        <View style={{backgroundColor: 'red', height: 50}}/>
    )
}
export const SignUp: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28'/>
            <ScrollView contentContainerStyle={style.container}>
                <View style={{flex: 1}}>
                    <Header />
                </View>
                <View style={{flex: 3, justifyContent: 'space-evenly'}}>
                    <Input label='name' />
                    <Input label='email' />
                    <Input label='pasword' />
                    <Button title='Sign Up' onPress={() => Alert.alert('sign up')}/>
                </View>
                <View style={{flex: 2, justifyContent: 'flex-end'}}>
                    <Footer />
                </View>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16
    }
})
