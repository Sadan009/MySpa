import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FoodListItem = ({ item }) => {
  return (
    <View
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: "dimgray" }}>
          {item.cal} cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="plus-circle" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FoodListItem;
