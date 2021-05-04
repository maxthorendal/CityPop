import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StadSearch = ({ navigation }) => {
  //Laddar den fortfarande?
  const [search, setSearch] = useState("");
  //error om den är tom
  const [err, setErr] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search by city</Text>
      {err ? (
        <Text>You didn't write a city!</Text>
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
            placeholder="Enter a city"
            onChangeText={(search) => setSearch(search)}
            defaultValue={search}
          />
          <TouchableOpacity
            style={styles.circlebutton}
            onPress={() => {
              if (search == "") {
                setErr(true);
              } else {
                navigation.navigate("Stad", {
                  sok: JSON.stringify(search),
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
  circlebutton: {
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

export default StadSearch;
