import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AuthStack, DashboardStack } from './Stacks';
import Routes from './Routes';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
const RootStack = () => {

    
  
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={Routes.DASHBOARD_STACK} component={DashboardStack} />
            
        </Stack.Navigator>
    )
}

export default RootStack