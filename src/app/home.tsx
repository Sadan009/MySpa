import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeArea}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text>Welcome To Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dimgray",
    paddingHorizontal: 10,
  },
  safeArea: {
    backgroundColor: "white",
    padding: 10,
  },
});
