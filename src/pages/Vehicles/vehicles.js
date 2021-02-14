import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PositionsList from "~/components/positionsList/index";

export default function Vehicles() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vehicles</Text>
      <PositionsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: "#f5ffff",
  },
});
