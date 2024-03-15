import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/Screens/Signup';
import Newaccount from './src/Screens/Newaccount';
import Profile from './src/Screens/Profile';
import Otp from './src/Screens/Otp';
import Newkitty from './src/Screens/Newkitty';
import Intro from './src/Screens/Intro';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerBackTitleVisible: false}}
        initialRouteName={'Intro'}>
        <Stack.Screen name="Kitty" component={Signup} />
        <Stack.Screen name="Newaccount" component={Newaccount} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Newkitty" component={Newkitty} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
