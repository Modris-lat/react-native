import * as React from 'react';
import storybook from './storybook';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {SignUp, SignIn, HomeScreen, ForgotPassword, ProfileScreen, BagScreen, ShopScreen, FavoritesScreen} from './src/views';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const IS_STORYBOOK = false;

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeTitle: React.FC = () => {
  return (
    <Image
      source={require('./assets/home.png')}
    />
  );
}


function App() {
  const isSignedIn = true;
  return (
    isSignedIn ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Shop" component={ShopScreen} />
          <Tab.Screen name="Bag" component={BagScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='SignUp' drawerPosition='right'>
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="Remind Password" component={ForgotPassword} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}
export default (IS_STORYBOOK ? storybook : App);