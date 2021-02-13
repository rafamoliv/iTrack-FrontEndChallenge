import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetVehicleList } from "~/store/Actions/vehicleActions";

export default function Landing() {
  const dispatch = useDispatch();
  const vehicleList = useSelector((state) => state.VehicleListReducer);

  useEffect(() => {
    GetVehicleList(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Landing</Text>
      <FlatList data={vehicleList} renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>} />
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
