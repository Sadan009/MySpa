import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const foodItems = [
  { label: "Pizza", cal: "75", brand: "Dominos" },
  { label: "Apple", cal: "95", brand: "Generic" },
  { label: "Banana", cal: "105", brand: "Generic" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.log("Searching For: ", search);
    setSearch("");
  };
  return (
    <View style={styles.container}>
      {/* <TextInput
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
      /> */}
      <Link href={"/home"} style={styles.link}>
        Home Screen
      </Link>
      <Link href="/onBoarding" style={styles.link}>
        Go to OnBoardingScreen
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6c6c6ff",
    padding: 10,
    gap: 10,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
  },
  link: {
    fontSize: 24,
    backgroundColor: "dimgray",
    borderRadius:10,
    padding: 10,
    color: "skyblue",
    fontWeight: "bold",
  },
});
