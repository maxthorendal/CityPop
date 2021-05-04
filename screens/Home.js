import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Komponent för home screen. Touchableopacity är sök knapparna som navigerar till nästgående screens.
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CityPop</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LandSearch")}
      >
        <Text>Search by country</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("StadSearch")}
      >
        <Text>Search by city</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#72bcd4",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Home;
