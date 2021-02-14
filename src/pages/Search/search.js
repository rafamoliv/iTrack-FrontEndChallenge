import React from "react";
import { View, Text, StyleSheet } from "react-native";
import VehicleList from "~/components/vehicleList";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <Text style={styles.text}>Search</Text>
      <VehicleList />
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
