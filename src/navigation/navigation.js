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
      <Tab.Navigator>
      <Tab.Screen name="Loading Page" component={Splash} options={{headerShown:false}} />
        <Tab.Screen name="Home Screen" component={HomeScreen} options={{headerShown:false}} />
        <Tab.Screen name="Detail" component={Detail} options={{headerShown:false}} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
export default Navigation;