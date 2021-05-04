import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const Land = ({ route, navigation }) => {
  //ladda in navigation params
  const { sok } = route.params;
  var search1 = JSON.stringify(sok.search);

  //Lägg till i apiFetch
  const apiURL =
    "http://api.geonames.org/searchJSON?q=" +
    search1 +
    "&maxRows=6&username=adam";

  //Laddar den fortfarande?
  const [laddar, setLaddar] = useState(true);

  //Error state
  const [err, setErr] = useState(false);

  //Lägg in data i en state
  const [data, setData] = useState([]);

  //Fetcha med promises. Observera att [] i slutet gör så att det inte skickar requests flera gånger.
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        if (JSON.stringify(json.geonames[0].fcl).split('"').join("") != "A") {
          setErr(true);
        }

        setData(json.geonames);
      })
      .catch(() => {
        setErr(true);
        setLaddar(false);
      })
      .finally(
        setTimeout(() => {
          setLaddar(false);
        }, 1500)
      ); // Vänta lite innan det laddar
  }, []);

  //sortera fallande population
  const newData = data;
  newData.sort((a, b) => b.population - a.population);
  //ta bort första item i listan som är landet man sökt på.
  const newNewData = newData.slice(1, newData.length);

  return (
    //Rubrik är landet man sökt på.
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
        <Text>The country you searched for does not exist.</Text>
      ) : (
        <FlatList
          data={newNewData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return (
              //Visa innehållet
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Stad", {
                      sok: item.name,
                    });
                    //
                  }}
                >
                  <View>{item.name}</View>
                </TouchableOpacity>
              </View>
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
  button: {
    backgroundColor: "#72bcd4",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Land;
