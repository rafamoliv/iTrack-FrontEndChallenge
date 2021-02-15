import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PositionsList({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {data.finalDateTime ? (
          <Text>
            {data.initialAddress} á {data.finalAddress}
          </Text>
        ) : (
          <Text>{data.initialAddress}</Text>
        )}
      </Text>
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
