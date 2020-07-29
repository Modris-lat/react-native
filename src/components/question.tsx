import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface Props {
    text: string;
    
}

export const Question: React.FC<Props> = ({text}) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{text}
            <Image style={style.vector} source={require('./../../assets/arrow.png')}/>
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        textAlign: 'right',
        flex: 0.97
    },
    vector: {
        
    }
})