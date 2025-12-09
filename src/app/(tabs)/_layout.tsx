import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";

export default function TabsLayout() {
      const [loaded, error] = useFonts({
        Roboto: require("../../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
        RobotItalic: require("../../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
    
        PlayFair: require("../../../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
        PlayFairItalic: require("../../../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    
        Inter: require("../../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
        InterItalic: require("../../../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    
        OpenSans: require("../../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
        OpenSansItalic: require("../../../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
        
        Montserrat: require("../../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        MontserratItalic: require("../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
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
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ headerShown:false }} />
      <Tabs.Screen name="services" options={{ title: "Services" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
