import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    size?: 'sm'|'md';
}

export const Button: React.FC<Props> = ({title, onPress}) => {
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 25
    },
    text: {
        color: '#F5F5F5',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 35
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#EF3651',
        flex: 0.15,
        
    },
    outlined: {
        borderWidth: 1.5,
        borderColor: 'red'
    },
    filled: {
        backgroundColor: 'black'
    }
})
