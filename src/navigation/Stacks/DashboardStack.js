import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen,CreateTask } from '../../screens';
import Routes from '../Routes';


const Stack = createNativeStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={Routes.HOME_SCREEN}
        
        >
            <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen name={Routes.CREATE_TASK} component={CreateTask} />
        </Stack.Navigator>
    )
}

export { DashboardStack };
