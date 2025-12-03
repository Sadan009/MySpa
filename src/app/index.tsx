import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const foodItems = [
  { label: "Pizza", cal: "75", brand: "Dominos" },
  { label: "Apple", cal: "95", brand: "Generic" },
  { label: "Banana", cal: "105", brand: "Generic" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.log("Searching For: ", search);
    setSearch("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search here..."
        style={styles.input}
      />
      { search && <Button title="Search" onPress={performSearch} />}

      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
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
    gap: 10,
  },
  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
  },
});
