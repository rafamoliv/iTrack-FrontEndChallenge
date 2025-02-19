import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from "~/pages/Landing";
import SearchStack from "./searchStack";

import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

/* console.disableYellowBox = true; */
export default function AppTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 50,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          display: "none",
        },
        inactiveTintColor: "#FFF",
        activeTintColor: "#b5905f",
      }}
    >
      <Screen
        name="Home"
        component={Landing}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: "SearchStack",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="car-sport-outline" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
