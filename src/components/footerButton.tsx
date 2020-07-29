import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';

interface Props {
    onPress: () => void;
    image: any;
}

export const FooterButton: React.FC<Props> = ({onPress, image}) => {
    return (
        <>
            <TouchableOpacity style={style.button} onPress={onPress}>
                <View style={{alignSelf: 'center', backgroundColor: '#3DA9DB', marginTop: 18}}>
                    <Image source={image}/>
                </View>
            </TouchableOpacity>
        </>
        
    );
};

const style = StyleSheet.create({
    button: {
        borderRadius: 24,
        backgroundColor: 'white',
        flex: 0.30,
        borderWidth: 5,
        borderColor: '#1E1F28'
    
    }
})