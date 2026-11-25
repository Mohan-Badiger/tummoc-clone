import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
          tabBarIcon: ({ color }) => <TummocHomeNavIcon size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="TummocMoneyTab"
        component={TummocMoneyScreen}
        options={{
          tabBarLabel: 'Tummoc Money',
          tabBarIcon: ({ color }) => <TummocMoneyNavIcon size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="BookingsTab"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => <TummocBookingsNavIcon size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="PersonalTab"
        component={PersonalScreen}
        options={{
          tabBarLabel: 'Personal',
          tabBarIcon: ({ color }) => (
            <View style={styles.personalIconWrapper}>
              <View style={styles.newBadgePill}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <TummocPersonalNavIcon size={21} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: colors.white,
    borderTopColor: '#EAEAEA',
    borderTopWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    elevation: 8,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: typography.weight.medium,
    marginTop: 1,
  },
  personalIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },
  newBadgePill: {
    backgroundColor: '#FF6E00',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 3,
    marginBottom: 1,
  },
  newBadgeText: {
    color: colors.white,
    fontSize: 8.5,
    fontWeight: '800',
    lineHeight: 10,
  },
});
