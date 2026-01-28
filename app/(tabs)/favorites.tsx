import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Favorites() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    // Mock data for styling
    const mockRecipes = [
        { _id: '1', name: 'Spaghetti Carbonara', cuisine: 'Italian', rating: 4.8, time: '30 min', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww' },
    ];
    setRecipes(mockRecipes);

    api.get("/users/favorites").then(res => {
         if(res.data?.data?.recipes) {
            setRecipes(res.data.data.recipes)
         }
    }).catch(err => console.log("API Error (using mock)", err));
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      className="bg-neutral-800 rounded-2xl mb-4 overflow-hidden shadow-sm shadow-black/50"
      onPress={() => router.push(`/recipe/${item._id}`)}
      activeOpacity={0.8}
    >
      <View className="h-40 bg-neutral-700 w-full relative">
          {item.image ? (
              <Image source={{ uri: item.image }} className="w-full h-full object-cover" />
          ) : (
                <View className="w-full h-full items-center justify-center bg-neutral-700">
                    <Ionicons name="restaurant" size={40} color="#525252" />
                </View>
          )}
          <View className="absolute top-3 right-3 bg-red-500 p-2 rounded-full shadow-lg">
            <Ionicons name="heart" size={16} color="white" />
          </View>
      </View>
      
      <View className="p-4">
        <View className="flex-row justify-between items-start">
            <View className="flex-1 mr-2">
                <Text className="text-white text-lg font-bold mb-1" numberOfLines={1}>{item.name}</Text>
                <View className="flex-row items-center">
                    <Ionicons name="time-outline" size={14} color="#a3a3a3" />
                    <Text className="text-neutral-400 text-xs ml-1 mr-3">{item.time || 'N/A'}</Text>
                </View>
            </View>
            <View className="bg-indigo-500/20 px-3 py-1 rounded-full">
                <Text className="text-indigo-400 text-xs font-medium">{item.cuisine}</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-neutral-900 pt-12 px-4">
        <StatusBar barStyle="light-content" />
        <View className="mb-6">
            <Text className="text-white text-3xl font-bold">Favorites</Text>
            <Text className="text-neutral-400">Your saved recipes</Text>
        </View>

        <FlatList
            data={recipes}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
                <View className="items-center justify-center py-20">
                    <Ionicons name="heart-dislike-outline" size={64} color="#525252" />
                    <Text className="text-neutral-500 mt-4">No favorites yet.</Text>
                </View>
            }
        />
    </View>
  );
}
