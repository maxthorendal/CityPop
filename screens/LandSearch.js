import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

//Importera screens m.m. från navigation. Sätt ursprungliga statesen på search och error.
const LandSearch = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [err, setErr] = useState(false);
  //Komponent för LandSearch screen. Skapa rubrik, text input box, och knapp (touchableopacity)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search by country</Text>
      {err ? (
        <Text>You forgot to enter a country!</Text>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              backgroundColor: "#f2f2f2",
              borderBottomWidth: 1,
              height: 40,
              width: 200,
              padding: 5,
              margin: 10,
            }}
            placeholder="Enter a country"
            onChangeText={(search) => setSearch(search)}
            defaultValue={search}
          />
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => {
              if (search == "") {
                setErr(true);
              } else {
                navigation.navigate("Land", {
                  sok: { search },
                });
              }
            }}
          >
            <text>Search</text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  circleButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#72bcd4",
    borderRadius: 30,
  },
});

export default LandSearch;
