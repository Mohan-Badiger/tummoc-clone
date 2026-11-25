import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { PassDetailsScreen } from '../screens/PassDetailsScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.backgroundLight },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="PassDetails" component={PassDetailsScreen} />
    </Stack.Navigator>
  );
};
