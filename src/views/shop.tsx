import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import { Categories } from './categories';

export const ShopScreen: React.FC = () => {
    return (
      <View style={style.container}>
        <Categories />
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    
  });