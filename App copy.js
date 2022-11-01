import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomTab from './navigate/bottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import Profile from './screen/profile';
import New from './screen/new';
import Notification from './screen/notification';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
    
  </NavigationContainer>
  );
}
export default App;