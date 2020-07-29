
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import {ButtonNavigationBar} from './../../src/components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {WomenCategory, MenCategory, KidsCategory} from './index';

const Tab = createMaterialTopTabNavigator();

export const Categories: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Womens" component={WomenCategory} />
      <Tab.Screen name="Mens" component={MenCategory} />
      <Tab.Screen name="Kids" component={KidsCategory} />
    </Tab.Navigator>
  );
}