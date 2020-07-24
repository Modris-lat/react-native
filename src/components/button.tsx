import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
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
        backgroundColor: '#EF3651'
    },
    text: {
        color: '#F5F5F5',
        fontSize: 20,
        lineHeight: 20,
        backgroundColor: 'red'
    },
    button: {
        alignItems:'center',
        padding: 10
    }
})
