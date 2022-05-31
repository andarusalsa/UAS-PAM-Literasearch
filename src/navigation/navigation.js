import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen.js';
import Detail from '../screen/Detail.js';
import Splash from '../screen/Splash.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;