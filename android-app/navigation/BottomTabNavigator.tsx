import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  TummocHomeNavIcon,
  TummocMoneyNavIcon,
  TummocBookingsNavIcon,
  TummocPersonalNavIcon,
} from '../components/common/TummocIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { TummocMoneyScreen } from '../screens/TummocMoneyScreen';
import { BookingsScreen } from '../screens/BookingsScreen';
import { PersonalScreen } from '../screens/PersonalScreen';
import { BottomTabParamList } from '../types/navigation';
import { colors, typography } from '../theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: '#8E9DA8',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <TummocHomeNavIcon size={23} color={color} />,
        }}
      />
      <Tab.Screen
        name="TummocMoneyTab"
        component={TummocMoneyScreen}
        options={{
          tabBarLabel: 'Tummoc Money',
          tabBarIcon: ({ color }) => <TummocMoneyNavIcon size={23} color={color} />,
        }}
      />
      <Tab.Screen
        name="BookingsTab"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => <TummocBookingsNavIcon size={23} color={color} />,
        }}
      />
      <Tab.Screen
        name="PersonalTab"
        component={PersonalScreen}
        options={{
          tabBarLabel: 'Personal',
          tabBarBadge: 'New',
          tabBarBadgeStyle: styles.badge,
          tabBarIcon: ({ color }) => <TummocPersonalNavIcon size={23} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 62,
    backgroundColor: colors.white,
    borderTopColor: colors.borderLight,
    borderTopWidth: 1,
    paddingBottom: 6,
    paddingTop: 6,
    elevation: 8,
  },
  tabBarLabel: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.medium,
  },
  badge: {
    backgroundColor: colors.accentOrange,
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
    height: 16,
    minWidth: 26,
    borderRadius: 8,
    lineHeight: 14,
  },
});
