import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FoodListItem from "../components/FoodListItem";

const foodItems = [
  { label: "Pizza", cal: "75", brand: "Dominos" },
  { label: "Apple", cal: "95", brand: "Generic" },
  { label: "Banana", cal: "105", brand: "Generic" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={({item}) => <FoodListItem item={item} />}
        contentContainerStyle={{gap: 5}}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
