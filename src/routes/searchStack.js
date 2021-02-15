import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vehicles from "~/pages/Vehicles";
import Positions from "~/pages/Positions";
import MapVehicle from "~/pages/MapVehicle";

const { Navigator, Screen } = createStackNavigator();

export default function SearchStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Vehicles" component={Vehicles} />
      <Screen name="Positions" component={Positions} />
      <Screen name="MapVehicle" component={MapVehicle} />
    </Navigator>
  );
}
