// import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
// import { useState } from "react";
// import { router } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import api from "../utils/api";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     // const res = await api.post("/auth/register", { name, email, password });
//     router.replace("/login");
//   };

//   return (
//     <View className="flex-1 bg-neutral-900">
//         <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} className="px-8">
//             <View className="items-center mb-10">
//                  <View className="w-20 h-20 bg-indigo-500 rounded-2xl items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
//                     <Ionicons name="person-add" size={36} color="white" />
//                 </View>
//                 <Text className="text-white text-3xl font-bold tracking-tight">Create Account</Text>
//                 <Text className="text-neutral-400 mt-2 text-base">Join us and start cooking!</Text>
//             </View>

//             <View className="space-y-4">
//                  <View>
//                     <Text className="text-neutral-400 mb-2 ml-1 text-sm font-medium">Full Name</Text>
//                     <View className="bg-neutral-800 rounded-xl px-4 py-3 border border-neutral-700 focus:border-indigo-500 flex-row items-center">
//                         <Ionicons name="person-outline" size={20} color="#a3a3a3" className="mr-3" />
//                          <TextInput
//                             className="flex-1 text-white text-base"
//                             placeholder="John Doe"
//                             placeholderTextColor="#525252"
//                             onChangeText={setName}
//                         />
//                     </View>
//                 </View>

//                 <View>
//                     <Text className="text-neutral-400 mb-2 ml-1 text-sm font-medium">Email Address</Text>
//                     <View className="bg-neutral-800 rounded-xl px-4 py-3 border border-neutral-700 focus:border-indigo-500 flex-row items-center">
//                         <Ionicons name="mail-outline" size={20} color="#a3a3a3" className="mr-3" />
//                          <TextInput
//                             className="flex-1 text-white text-base"
//                             placeholder="user@example.com"
//                             placeholderTextColor="#525252"
//                             onChangeText={setEmail}
//                             autoCapitalize="none"
//                         />
//                     </View>
//                 </View>

//                 <View>
//                     <Text className="text-neutral-400 mb-2 ml-1 text-sm font-medium">Password</Text>
//                     <View className="bg-neutral-800 rounded-xl px-4 py-3 border border-neutral-700 focus:border-indigo-500 flex-row items-center">
//                          <Ionicons name="lock-closed-outline" size={20} color="#a3a3a3" className="mr-3" />
//                          <TextInput
//                             className="flex-1 text-white text-base"
//                             placeholder="••••••••"
//                             placeholderTextColor="#525252"
//                             secureTextEntry
//                             onChangeText={setPassword}
//                         />
//                     </View>
//                 </View>

//                 <TouchableOpacity
//                     className="bg-indigo-500 py-4 rounded-xl shadow-lg shadow-indigo-500/20 mt-6 active:bg-indigo-600"
//                     onPress={handleRegister}
//                 >
//                     <Text className="text-white text-center font-bold text-lg">Sign Up</Text>
//                 </TouchableOpacity>

//                  <View className="flex-row justify-center mt-6">
//                     <Text className="text-neutral-400">Already have an account? </Text>
//                     <TouchableOpacity onPress={() => router.push("/login")}>
//                         <Text className="text-indigo-400 font-bold">Log In</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
//     </View>
//   );
// }
