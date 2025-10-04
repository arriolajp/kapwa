import { Tabs } from 'expo-router';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
      <Tabs.Screen name="events" options={{ title: 'Events', tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} /> }} />
      <Tabs.Screen name="business" options={{ title: 'Business', tabBarIcon: ({ color, size }) => <Ionicons name="business" color={color} size={size} /> }} />
      <Tabs.Screen name="user" options={{ title: 'User', tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} /> }} />
      <Tabs.Screen name="admin" options={{ title: 'Admin', tabBarIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} /> }} />
    </Tabs>
  );
}

