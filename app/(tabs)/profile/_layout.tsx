import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="profile" options={{ title: "Profil utilisateur" }} />
    </Stack>
  );
}
