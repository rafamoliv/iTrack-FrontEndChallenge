import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetVehicleList } from "~/store/Actions/vehicleActions";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function VehicleList() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicleListReducer.vehicles);

  const navigation = useNavigation();

  function vehiclePositions(id) {
    navigation.navigate("Vehicles", {
      vehicle: id,
    });
  }

  useEffect(() => {
    GetVehicleList(dispatch);
  }, []);

  return vehicles.map((vehicle) => (
    <View key={vehicle.id} style={styles.container}>
      <TouchableOpacity onPress={() => vehiclePositions(vehicle.id)}>
        <Text style={styles.text}>{vehicle.name}</Text>
        <Text style={styles.text}>{vehicle.brand}</Text>
      </TouchableOpacity>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: "#f5ffff",
  },
});
