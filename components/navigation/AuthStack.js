import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import RegisterScreen from '../auth/Register';
import LoginScreen from '../auth/Login';
import Onboarding from '../OnboardingScreen/OnboardingScreen';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../app_screens/SignIn';
import FirstTimeLogin from '../app_screens/FIrstTimeLogin';
import NotificationScreen from '../app_screens/NotificationScreen';
import MyProfileScreen from '../app_screens/MyProfileScreen';
import Dashboard from '../app_screens/Dashboard';
import PersonalProfile from '../app_screens/PersonalProfile';
import JobDetails from '../app_screens/JobDetails';
import Settings from '../app_screens/Settings';
import PaySlip from '../app_screens/PaySlip';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Icon } from 'native-base';
import BottomTabs from '../app_screens/BottomTabs';
import MyDashboards from '../app_screens/MyDashboards';
import LeaveDashboard from '../app_screens/LeaveDashboard';
import App from '../../App';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={SplashScreen}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon name='arrow-back' />
              {/* <Image
                source={require('../../assets/larrow2.png')}
                style={styles.larrow}
              /> */}
            </View>
          )
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstTimeLogin"
        component={FirstTimeLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalProfile"
        component={PersonalProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaySlip"
        component={PaySlip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyDashboards"
        component={MyDashboards}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeaveDashboard"
        component={LeaveDashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../assets/stc_icon.png')}
        style={styles.splashImage}
      />
    </View>
  )
}

export default AuthStack;

const styles = StyleSheet.create({
  larrow: {
    height: 18,
    width: 18,
    resizeMode: 'cover',
  },
  splashText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
})
