// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="login" />
//       <Stack.Screen name="register" />
//       <Stack.Screen name="(tabs)" />
//       <Stack.Screen name="recipe/[id]" />
//       <Stack.Screen name="recipe/create" />
//       <Stack.Screen name="profile/edit" />
//     </Stack>
//   );
// }


import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
