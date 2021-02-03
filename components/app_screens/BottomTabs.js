import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavBar from './Header';
import Dashboard from './Dashboard';
import PaySlip from './PaySlip';
import Settings from './Settings';
import MyProfile from './MyProfile';
import SignIn from './SignIn';
import MyProfileScreen from './MyProfileScreen';
import MyDashboards from './MyDashboards';
import { Icon } from 'native-base';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator 
            activeColor="#ff375e"
            barStyle={{ backgroundColor: '#ffff' }}
            tabBarOptions={{
                showLabel: true,
            }}
        >
            <Tab.Screen name="Home" component={Dashboard}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={24} color="#8E9AA0" />
                    ),
                }}
            />
            <Tab.Screen name="PaySLips" component={PaySlip}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="bookmark" size={24} color="#8E9AA0" />
                    ),
                }}
            />
            <Tab.Screen name="MyProfile" component={MyProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-circle" size={24} color="#8E9AA0" />
                    ),
                }}
            />
            <Tab.Screen name="MyDashboards" component={MyDashboards}
                options={{
                    tabBarIcon: () => (
                        <Icon name="keypad" size={24} color="#8E9AA0" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}