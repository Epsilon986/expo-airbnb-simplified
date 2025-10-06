import React, { useState } from "react";
import {
    Alert,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Profile() {
  // --- initial user data (could come from API)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+33 6 12 34 56 78",
    bio: "Traveler, food lover, and tech enthusiast.",
    avatar: "https://picsum.photos/200?random=5",
  });

  // --- handlers
  const handleChange = (field: keyof typeof user, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // In a real app, this would send data to an API
    Alert.alert("Profile Saved", `Your changes have been saved!`);
  };

  const handleAvatarChange = () => {
    // Simulate random avatar change
    const randomId = Math.floor(Math.random() * 1000);
    setUser((prev) => ({
      ...prev,
      avatar: `https://picsum.photos/200?random=${randomId}`,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar */}
      <TouchableOpacity onPress={handleAvatarChange}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.changePhoto}>Change Photo</Text>
      </TouchableOpacity>

      {/* Editable Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(text) => handleChange("name", text)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={user.phone}
          onChangeText={(text) => handleChange("phone", text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={4}
          value={user.bio}
          onChangeText={(text) => handleChange("bio", text)}
        />
      </View>

      {/* Save button */}
      <Button title="Save Changes" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  changePhoto: {
    color: "#2f95dc",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
    marginLeft: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
