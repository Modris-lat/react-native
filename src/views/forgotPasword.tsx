import  { ScrollView, StatusBar, Text, Alert } from 'react-native';
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Button} from '../components'

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Forgot Password</Text>
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


export const ForgotPassword: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28'/>
            <ScrollView contentContainerStyle={style.container}>
                <View style={{flex: 0.25}}>
                    <Header />
                </View>
                <View>
                    <Text style={{color: 'white', paddingBottom: 10}}>Please, enter your email address. You will receive a link to create a new password via email.
                    </Text>
                </View>
                <View style={{flex: 0.8}}>
                    <Input label='Email' />
                    <Text></Text>
                    <View style={{flex: 1, paddingTop: 50}}>
                        <Button title='SEND' onPress={() => Alert.alert('send email')}/>
                    </View>
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