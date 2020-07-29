import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface Props {
    text: string;
    
}

export const FooterText: React.FC<Props> = ({text}) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        flex: 0.97
    },
    vector: {
        
    }
})