import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Whisper_400Regular, useFonts } from "@expo-google-fonts/whisper";


export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({ whisper: Whisper_400Regular });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "red" } }}>
      <Stack.Screen name="index" options={{title:'Entry point'}} />
    </Stack>
  );
}
