import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

export const MenCategory: React.FC = () => {
    return (
        <View>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>Men's Category</Text>
            <TouchableOpacity onPress={() => Alert.alert('new')}>
                <Text style={{fontSize: 34}}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('clothes')}>
                <Text style={{fontSize: 34}}>Clothes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('shoes')}>
                <Text style={{fontSize: 34}}>Shoes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('accesories')}>
                <Text style={{fontSize: 34}}>Accesories</Text>
            </TouchableOpacity>
        </View>
    );
};

