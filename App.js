import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Color List" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  const [colorArray, setColorArray] = useState([]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColor() {
    setColorArray([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },
      ...colorArray,
    ]);
  }

  function reset() {
    setColorArray([]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ height: 40, justifyContent: "center", alignItems: "center" }}
        onPress={addColor}
      >
        <Text style={{ color: "black" }}>Add Colour</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 40, justifyContent: "center", alignItems: "center" }}
        onPress={reset}
      >
        <Text style={{ color: "red" }}>Reset</Text>
      </TouchableOpacity>

      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",

    justifyContent: "center",
  },
});
