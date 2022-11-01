import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomTab from './navigate/bottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import Profile from './screen/profile';
import New from './screen/new';
import Notification from './screen/notification';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            tabBarLabel: 'New',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;