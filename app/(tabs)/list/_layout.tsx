import { Stack } from "expo-router";

export default function ListLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Toutes les locations" }} />
      <Stack.Screen
        name="location_details"
        options={{ 
          title: "Détails de la location",
          presentation: 'modal'
         }}
      />
    </Stack>
  );
}
