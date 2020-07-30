import  { ScrollView, StatusBar, Text, Alert } from 'react-native';
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Button, Question, FooterText, FooterButton} from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Sign up</Text>
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
        <View style={{height: 120}}>
            <View>
                <FooterText text='Or sign up with social account'/>
            </View>
            <View style={{flexDirection: 'row', flex: 0.8, alignSelf: 'center', margin: 10}}>
                <FooterButton onPress={() => Alert.alert('sign up')} image={require('./../../assets/g.png')}/>
                <FooterButton onPress={() => Alert.alert('sign up')} image={require('./../../assets/f.png')}/>
            </View>
        </View>
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
                    <Input label='Name' />
                    <Input label='Email' />
                    <Input label='Password' />
                    <Question text='Already have an account?   ' />
                    <Button title='SIGN UP' onPress={() => Alert.alert('sign up')}/>
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
