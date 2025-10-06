// app/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, // on laisse les headers gérés dans les sous-layouts
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            list: "list-circle",
            profile: "person-circle",
          };
          return (
            <Ionicons
              name={icons[route.name] ?? "help-circle"}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="list" options={{ title: "Liste" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
