import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const home = () => {

  const notification = () => {
    console.log("Notifiaction Button Clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.location}>
            <Entypo name="location" size={15} color="black" />
            <Text style={{ fontSize: 12, fontWeight: "condensedBold" }}>
              Madiyao, Lucknow
            </Text>
          </View>
          <Text
            style={{
              color: "dimgray",
              marginTop: 3,
              fontFamily: "Montserrat",
              fontSize: 10,
              marginLeft: 7,
            }}
          >
            Naaz Palace, Naubasta Khurd
          </Text>
        </View>
        <Pressable onPress={notification}>
          <Ionicons
            name="notifications-outline"
            style={styles.notification}
            size={24}
            color="darkorange"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "dimgray",
    paddingHorizontal: 5,
  },

  header: {
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginLeft: 10,
  },
  notification: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 3,
  },
});
