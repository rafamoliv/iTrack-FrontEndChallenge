import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "~/pages/Landing";
import Vehicles from "~/pages/Vehicles";
import Search from "~/pages/Vehicles";

const { Navigator, Screen } = createStackNavigator();

//Exports Stacks rtoutes
export default function SearchStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Landing" component={Landing} />
      <Screen name="Search" component={Search} />
      <Screen name="Vehicles" component={Vehicles} />
    </Navigator>
  );
}
