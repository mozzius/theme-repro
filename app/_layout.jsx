import { Stack } from "expo-router";
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import DarkContext from "../context";
import { useState } from "react";

export default function Layout() {
  const [isLight, setIsLight] = useState(false);

  return (
    <DarkContext.Provider value={[isLight, setIsLight]}>
      <ThemeProvider value={isLight ? DefaultTheme : DarkTheme}>
        <Stack />
      </ThemeProvider>
    </DarkContext.Provider>
  );
}
