
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


// Prevent auto hide before fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    RobotItalic: require("../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),

    PlayFair: require("../../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    PlayFairItalic: require("../../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),

    Inter: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    InterItalic: require("../../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),

    OpenSans: require("../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    OpenSansItalic: require("../../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    Montserrat: require("../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    MontserratItalic: require("../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
