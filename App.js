import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from './screens/HomeScreen';
import StoryScreen from './screens/StoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyProfileScreen from './screens/MyProfileScreen';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import WatchScreen from './screens/WatchScreen';
import NotificationScreen from './screens/NotificationScreen';
import MenuScreen from './screens/MenuScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SettingScreen from './screens/SettingScreen';

export const TabNavigator = () => {
  return (
    <Tab.Navigator activeColor="blue" barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={SignupScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: ({color, focused}) => (
            <Feather name="video" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: ({color, focused}) => (
            <Feather name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name="notifications-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={SettingScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name="menu-outline" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
