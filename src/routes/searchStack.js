import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "~/pages/Search";
import Vehicles from "~/pages/Vehicles";

const { Navigator, Screen } = createStackNavigator();

export default function SearchStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Search" component={Search} />
      <Screen name="Vehicles" component={Vehicles} />
    </Navigator>
  );
}
