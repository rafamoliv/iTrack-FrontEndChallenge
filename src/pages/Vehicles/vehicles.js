import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import VehicleList from "~/components/vehicleList";

import { useDispatch, useSelector } from "react-redux";
import { GetVehicleList } from "~/store/Actions/vehicleActions";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { GetPositionList } from "~/store/Actions/positionActions";

export default function Vehicles() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicleListReducer.vehicles);

  const navigation = useNavigation();

  function vehiclePositions(vehicleId) {
    navigation.navigate("Positions", {
      vehicle: vehicleId,
    });
  }

  useEffect(() => {
    GetVehicleList(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => GetPositionList(item.id) && vehiclePositions(item)}>
            <VehicleList data={item} />
          </TouchableOpacity>
        )}
      />
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
