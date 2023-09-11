import React from 'react';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Notification from './Screens/Notification';
import Setting from './Screens/Setting';
import Search from './Screens/Search';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      labeled={false} 
      barStyle={{backgroundColor: '#251749', }} 
      activeColor="#495579" 
      inactiveColor='#FFFBEB' >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='home' color={color} size={26} />
            )
          }}/>
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='magnify' color={color} size={26} />
            )
          }}/>
        <Tab.Screen name="Notification" component={Notification}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='bell' color={color} size={26} />
            )
          }}/>
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='account-circle' color={color} size={26} />
            )
          }}/>
        <Tab.Screen name="Setting" component={Setting}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='cog-outline' color={color} size={26} />
            )
          }}/>
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}


