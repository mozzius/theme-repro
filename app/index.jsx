import { Stack } from "expo-router";
import { useContext } from "react";
import { Button, Text, View, useColorScheme } from "react-native";
import DarkContext from "../context";

export default function Page() {
  const colourScheme = useColorScheme();
  const [isLight, setIsLight] = useContext(DarkContext);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `${
            isLight ? "Light" : "Dark"
          } theme, ${colourScheme} scheme`,
          headerSearchBarOptions: {
            placeholder: "Search",
          },
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ color: isLight ? "black" : "white" }}>
          Current theme: {isLight ? "light" : "dark"}
        </Text>
        <Text style={{ color: isLight ? "black" : "white" }}>
          Current system scheme: {colourScheme}
        </Text>
        <Button title="Toggle theme" onPress={() => setIsLight((l) => !l)} />
      </View>
    </>
  );
}
