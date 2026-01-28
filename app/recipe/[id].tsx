import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    api.get(`/recipes/${id}`).then(res =>
      setRecipe(res.data.data)
    );
  }, []);

  if (!recipe) return <Text className="text-white">Loading...</Text>;

  return (
    <View className="flex-1 bg-black px-6 pt-6">
      <Text className="text-white text-2xl font-bold">{recipe.name}</Text>
      <Text className="text-gray-400 mt-2">{recipe.cuisine}</Text>
      <Text className="text-white mt-4">Rating: {recipe.rating}</Text>
    </View>
  );
}
