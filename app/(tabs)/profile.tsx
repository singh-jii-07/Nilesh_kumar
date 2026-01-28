import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import api from "../../utils/api";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser({ username: "emilycooks", email: "emily.johnson@example.com", name: "Emily" });

    api.get("/users/profile").then(res => {
      if (res.data?.data) setUser(res.data.data);
    }).catch(err => console.log("API Error (using mock)", err));
  }, []);

  if (!user) {
    return (
      <View className="flex-1 bg-neutral-900 justify-center items-center">
        <Text className="text-white">Loading...</Text>
      </View>
    );
  }

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => router.replace("/login") },
    ]);
  };

  return (
    <View className="flex-1 bg-neutral-950">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="items-center pt-12 pb-8 bg-neutral-900 rounded-b-[40px] shadow-lg shadow-black/30">
          <View className="relative">
            <View className="w-28 h-28 bg-neutral-800 rounded-full items-center justify-center border-4 border-neutral-950">
              {user.avatar ? (
                <Image source={{ uri: user.avatar }} className="w-full h-full rounded-full" />
              ) : (
                <Ionicons name="person" size={50} color="#737373" />
              )}
            </View>

            <TouchableOpacity
              className="absolute bottom-0 right-0 bg-teal-500 p-2 rounded-full border-2 border-neutral-950"
              onPress={() => router.push("/profile/edit")}
            >
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <Text className="text-white text-2xl font-bold mt-4">{user.username}</Text>
          <Text className="text-neutral-400">{user.email}</Text>

          <View className="flex-row mt-6 space-x-12">
            <View className="items-center">
              <Text className="text-white font-bold text-lg">12</Text>
              <Text className="text-neutral-400 text-xs uppercase tracking-wider">Recipes</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-bold text-lg">45</Text>
              <Text className="text-neutral-400 text-xs uppercase tracking-wider">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-bold text-lg">108</Text>
              <Text className="text-neutral-400 text-xs uppercase tracking-wider">Saved</Text>
            </View>
          </View>
        </View>

        {/* Settings */}
        <View className="px-6 mt-8 space-y-4">
          <Text className="text-neutral-400 text-sm font-medium ml-2 mb-2 uppercase tracking-widest">
            Settings
          </Text>

          <TouchableOpacity
            className="flex-row items-center bg-neutral-900 p-4 rounded-xl"
            onPress={() => router.push("/profile/edit")}
          >
            <View className="w-10 h-10 bg-teal-500/10 items-center justify-center rounded-lg mr-4">
              <Ionicons name="person-outline" size={20} color="#2dd4bf" />
            </View>
            <Text className="flex-1 text-white font-medium text-base">Edit Profile</Text>
            <Ionicons name="chevron-forward" size={20} color="#737373" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-neutral-900 p-4 rounded-xl">
            <View className="w-10 h-10 bg-teal-500/10 items-center justify-center rounded-lg mr-4">
              <Ionicons name="notifications-outline" size={20} color="#2dd4bf" />
            </View>
            <Text className="flex-1 text-white font-medium text-base">Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#737373" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-neutral-900 p-4 rounded-xl">
            <View className="w-10 h-10 bg-teal-500/10 items-center justify-center rounded-lg mr-4">
              <Ionicons name="shield-checkmark-outline" size={20} color="#2dd4bf" />
            </View>
            <Text className="flex-1 text-white font-medium text-base">Privacy & Security</Text>
            <Ionicons name="chevron-forward" size={20} color="#737373" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center bg-red-500/10 p-4 rounded-xl mt-4"
            onPress={handleLogout}
          >
            <View className="w-10 h-10 bg-red-500/10 items-center justify-center rounded-lg mr-4">
              <Ionicons name="log-out-outline" size={20} color="#ef4444" />
            </View>
            <Text className="flex-1 text-red-500 font-medium text-base">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
