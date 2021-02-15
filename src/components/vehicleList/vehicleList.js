import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function VehicleList({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.brand}</Text>
      <Text style={styles.text}>{data.description}</Text>
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
