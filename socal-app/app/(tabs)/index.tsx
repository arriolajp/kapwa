import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="events" options={{ title: "Events" }} />
      <Tabs.Screen name="business" options={{ title: "Business" }} />
      <Tabs.Screen name="user" options={{ title: "User" }} />
      <Tabs.Screen name="admin" options={{ title: "Admin" }} />
    </Tabs>
  );
}