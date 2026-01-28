import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import api from "../../utils/api";
import "@/global.css";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const mockRecipes = [
      {
        _id: "1",
        name: "Spaghetti Carbonara",
        cuisine: "Italian",
        rating: 4.8,
        time: "30 min",
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
      },
      {
        _id: "2",
        name: "Chicken Tikka Masala",
        cuisine: "Indian",
        rating: 4.9,
        time: "45 min",
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
      },
      {
        _id: "3",
        name: "Sushi Platter",
        cuisine: "Japanese",
        rating: 4.7,
        time: "60 min",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
      },
    ];
    setRecipes(mockRecipes);

    api.get("/recipes").then((res) => {
      if (res.data?.data?.recipes) {
        setRecipes(res.data.data.recipes);
      }
    });
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => router.push(`/recipe/${item._id}`)}
      className="mb-6 bg-white rounded-3xl shadow-xl shadow-black/10"
    >
      {/* IMAGE */}
      <Image
        source={{ uri: item.image }}
        style={{ height: 230 }}
        className="w-full rounded-t-3xl"
        resizeMode="cover"
      />

      {/* BADGES */}
      <View className="absolute top-4 left-4 flex-row items-center bg-white/90 px-3 py-1.5 rounded-full">
        <Ionicons name="star" size={14} color="#FACC15" />
        <Text className="ml-1 text-xs font-bold text-neutral-900">
          {item.rating}
        </Text>
      </View>

      <TouchableOpacity className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full">
        <Ionicons name="heart-outline" size={18} color="#FF7A00" />
      </TouchableOpacity>

      {/* CONTENT */}
      <View className="p-5">
        <Text
          numberOfLines={1}
          className="text-xl font-extrabold text-neutral-900"
        >
          {item.name}
        </Text>

        <View className="flex-row items-center mt-2">
          <Ionicons name="time-outline" size={14} color="#6B7280" />
          <Text className="ml-1 text-sm text-neutral-600">
            {item.time}
          </Text>
        </View>

        <View className="flex-row justify-between items-center mt-4">
          <View className="bg-orange-100 px-4 py-1.5 rounded-full">
            <Text className="text-orange-600 text-xs font-semibold uppercase">
              {item.cuisine}
            </Text>
          </View>

          <TouchableOpacity className="bg-orange-500 px-7 py-2.5 rounded-full">
            <Text className="text-white font-bold">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View className="bg-orange-500 px-5 pt-8 pb-8 rounded-b-[30px]">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-3xl font-extrabold">
              Find Your Food
            </Text>
          </View>

          <TouchableOpacity className="bg-white/20 p-3 rounded-full">
            <Ionicons
              name="notifications-outline"
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View className="mt-5 flex-row items-center bg-white rounded-2xl px-4 py-3">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search recipes..."
            className="ml-2 flex-1 text-neutral-800"
          />
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={recipes}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text className="text-neutral-500">No recipes found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
