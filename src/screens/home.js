import React from "react";
import { Text, View, TouchableOpacity,Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Help from "./help";
import Maps from "./map";
import PendingPage from "./pending";
const Tab = createBottomTabNavigator();

function Home() {
    return (
    
        <Tab.Navigator
             screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Food-Banks') {
              iconName = focused
                ? 'map'
                : 'map';
            } else if (route.name === 'Food') {
              iconName = focused ? 'md-fast-food' : 'md-fast-food';
            }
            else if (route.name === 'My-Details') {
              iconName = focused ? 'plus' : 'plus';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Food-Banks" component={Maps} />
          <Tab.Screen name="My-Details" component={PendingPage} />
          <Tab.Screen name="Food" component={Help} />
        </Tab.Navigator>
      
        
    )
}
export default Home;