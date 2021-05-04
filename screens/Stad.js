import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

const Stad = ({ route, navigation }) => {
  //ladda in navigation params
  const { sok } = route.params;
  var search1 = sok;

  //Lägg till i apiFetch
  const apiURL =
    "http://api.geonames.org/searchJSON?q=" +
    search1 +
    "&maxRows=1&username=adam";

  //Laddar den fortfarande?
  const [laddar, setLaddar] = useState(true);
  const [err, setErr] = useState(false);

  //Lägg in data i en state
  const [data, setData] = useState([]);

  //Fetcha med promises.
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        if (JSON.stringify(json.geonames[0].fcl).split('"').join("") == "A") {
          setErr(true);
        }
        setData([json.geonames[0]]);
      }) //tar bara fram första
      .catch(() => {
        setErr(true);
        setLaddar(false);
      })
      .finally(
        setTimeout(() => {
          setLaddar(false);
        }, 1500)
      );
  }, []);

  //Om adminCode1 (från API:n) != 00 då är det ingen stad

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 10,
          fontWeight: "700",
          fontSize: 24,
          textTransform: "capitalize",
        }}
      >
        {search1.split('"').join("")}
      </Text>
      {laddar ? (
        //Om den laddar visa laddning
        <ActivityIndicator size="small" color="#0000ff" />
      ) : //Om den inte laddar, visa listan
      err ? (
        <Text>The city you searched for does not exsit.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return (
              //Visa innehållet
              <Text style={styles.popStyle}>Population: {item.population}</Text>
            );
          }}
        />
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
  popStyle: {
    alignSelf: "center",
    fontSize: 18,
  },
});

export default Stad;
