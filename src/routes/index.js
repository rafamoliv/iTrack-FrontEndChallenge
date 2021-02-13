import React from "react";
import AppTabs from "./appTabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

export default function Routes() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppTabs />
    </NavigationContainer>
  );
}
