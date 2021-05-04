import React from "react";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//komponenter
import Home from "./screens/Home";
import StadSearch from "./screens/StadSearch";
import Stad from "./screens/Stad";
import LandSearch from "./screens/LandSearch";
import Land from "./screens/Land";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StadSearch" component={StadSearch} />
        <Stack.Screen name="Stad" component={Stad} />
        <Stack.Screen name="LandSearch" component={LandSearch} />
        <Stack.Screen name="Land" component={Land} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
