import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './screen/home';
import Profile from './screen/profile';
import Map from './screen/map';
import CallData from './screen/car';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import Page from './screen/page';
import Detail from './screen/detail';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        {/* <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-home" size={32} color="black" />
            ),
          }}
        /> */}
        <Tab.Screen
          name="page"
          component={Page}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-home" size={32} color="black" />
            ),
          }}
        />
         <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarLabel: 'Detail',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-open" size={32} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="CallData"
          component={CallData}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-location" size={32} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-person-circle-sharp" size={32} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;