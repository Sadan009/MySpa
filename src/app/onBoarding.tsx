import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  useWindowDimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CandleSpa from "../../assets/images/candle-spa.png";
import PeaceSpa from "../../assets/images/peace-spa.png";
import TrackSpa from "../../assets/images/track-spa.png";
import HealthySpa from "../../assets/images/healthy-spa.png";

const onBoardingSteps = [
  {
    icon: "spa",
    title: "Find Your Peace",
    description:
      "Access guided meditations and breathing exercises designed to calm your mind instantly.",
    uri: PeaceSpa,
  },
  {
    icon: "heart-pulse",
    title: "Track Your Wellness",
    description:
      "Monitor your mood, sleep quality, and stress levels to understand what truly helps you.",
    uri: TrackSpa,
  },
  {
    icon: "moon",
    title: "Build Healthy Habits",
    description:
      "Create personalized routines and gentle reminders that make mindfulness part of your day.",
    uri: HealthySpa,
  },
];

const onBoarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  
  // to get dynamic height and width 
  const { width, height } = useWindowDimensions();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Preload all images on mount
 

  // current screen data according to index [position]
  const data = onBoardingSteps[screenIndex];

  // Animate content when screen changes
  useEffect(() => {
   // Don't animate until images are loaded

    // Reset animation values BEFORE the new slide appears
    fadeAnim.setValue(0);
    slideAnim.setValue(40); // slide from lower
    scaleAnim.setValue(0.8); // slight zoom-out before zooming in

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.exp), // smooth fade
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.exp), // smooth slide in
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 6, // little bounce at end
        useNativeDriver: true,
      }),
    ]).start();
  }, [screenIndex]);

  // when it reaches the end of onboarding screens
  const endOnBoarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const onContinue = async () => {
    const islastScreen = screenIndex === onBoardingSteps.length - 1;

    // 1. Animate OUT current screen
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -40,
        duration: 600,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start(async () => {
      if (islastScreen) {
        endOnBoarding();
        return;
      }

      // 2. Delay to allow image to preload quietly
      await new Promise((resolve) => setTimeout(resolve, 150));

      // 3. Switch screen ONLY after delay
      setScreenIndex(screenIndex + 1);
    });
  };


  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };



  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onBoardingSteps.map((step, index) => {
          return (
            <View
              key={index}
              style={[
                styles.stepIndicator,
                {
                  backgroundColor: screenIndex === index ? "#CEF202" : "gray",
                },
              ]}
            />
          );
        })}
      </View>

      <View style={styles.pageContent}>
        <View style={styles.footer}>
          <Animated.View
            style={[
              {
                // width: width,
                // height: height * 0.5,
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
              },
              styles.imageOuter,
            ]}
          >
            <Image
              source={
                typeof data.uri === "string" ? { uri: data.uri } : data.uri
              }
              style={[{ width: width * 0.5, height: height * 0.5 }, styles.image]}
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.View
            style={[
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
              styles.footerInner,
            ]}
          >
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </Animated.View>

          <View style={styles.buttonsRow}>
            <Text onPress={onBack} style={styles.buttonText}>
              Skip
            </Text>

            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default onBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    // justifyContent: 'center'
  },
  imageOuter:{
    // borderWidth: 2,
    // borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width: "60%",
    // height: "60%",
    // borderWidth: 1,
    // borderColor: 'red',
    // alignSelf: "center"
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Montserrat",
    lineHeight: 28,
  },
  footer: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: 'green'
  },
  footerInner:{
    // borderWidth: 2,
    // borderColor: 'green'
  },
  buttonsRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    padding: 14,
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "OpenSans",
    fontSize: 16,
    padding: 8,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 7,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    margin: 5,
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#FDFDFD",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
});
