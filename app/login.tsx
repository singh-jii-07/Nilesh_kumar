import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import api from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert(
        "Login Failed",
        error?.response?.data?.message || "Server not reachable"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      }}
      resizeMode="cover"
      className="flex-1"
    >
      {/* Dark overlay */}
      <View className="flex-1 bg-black/30">
        <SafeAreaView className="flex-1">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
              }}
              className="px-6"
            >
              {/* CARD */}
              <View className="bg-white/95 rounded-2xl p-6 shadow-lg">
                {/* Header */}
                <View className="items-center mb-8">
                  <Text className="text-3xl font-bold text-gray-900">
                    Welcome Back
                  </Text>
                  <Text className="text-gray-500 mt-2 text-base">
                    Sign in to continue exploring
                  </Text>
                </View>

                {/* Form */}
                <View className="gap-y-5">
                  <View>
                    <Text className="text-black font-bold mb-2 ml-1">
                      Email Address
                    </Text>
                    <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-4 h-14">
                      <Feather name="mail" size={20} color="#0f766e" />
                      <TextInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="#9CA3AF"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        className="flex-1 ml-3 text-base text-gray-900"
                        value={email}
                        onChangeText={setEmail}
                      />
                    </View>
                  </View>

                  <View>
                    <Text className="text-black font-bold mb-2 ml-1">
                      Password
                    </Text>
                    <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-4 h-14">
                      <Feather name="lock" size={20} color="#0f766e" />
                      <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry={!showPassword}
                        className="flex-1 ml-3 text-base text-gray-900"
                        value={password}
                        onChangeText={setPassword}
                      />
                      <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <Feather
                          name={showPassword ? "eye" : "eye-off"}
                          size={20}
                          color="#0f766e"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity className="items-end">
                    <Text className="text-teal-600 font-medium">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleLogin}
                    disabled={loading}
                    className={`bg-teal-600 h-14 rounded-xl items-center justify-center shadow-md shadow-teal-300 ${
                      loading ? "opacity-70" : ""
                    }`}
                  >
                    {loading ? (
                      <Text className="text-white text-lg font-semibold">
                        Logging in...
                      </Text>
                    ) : (
                      <Text className="text-white text-lg font-semibold">
                        Sign In
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>

                {/* Footer */}
                <View className="flex-row justify-center mt-8">
                  <Text className="text-gray-500 text-base">
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-teal-600 font-bold text-base">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
