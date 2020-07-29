
import {View, StyleSheet, Button} from 'react-native';
import React, { ReactNode } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

export interface NavigationTabProps {
    onPress: () => void;
    title: string;
}


export const ButtonNavigationBar: React.FC<NavigationTabProps> = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Button title='Home' onPress={onPress} />
            <Button title='Shop' onPress={onPress} />
            <Button title='Bag' onPress={onPress} />
            <Button title='Favorites' onPress={onPress} />
            <Button title='Profile' onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
});