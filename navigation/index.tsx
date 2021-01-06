import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { ColorSchemeName,ActivityIndicatorBase } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import AuthStackNavigator from './AuthStackNavigator'


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();


function RootNavigator() {
  const hasToken = useSelector(state => state.auth.token)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        hasToken?  (
          <>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          </>
        ):
        <Stack.Screen name="Auth" component={AuthStackNavigator}/>
      }
        {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />      */}
    </Stack.Navigator>
  );
}
