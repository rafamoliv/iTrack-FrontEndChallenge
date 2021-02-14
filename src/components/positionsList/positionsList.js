import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetPositionList } from "~/store/Actions/positionActions";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from "~/services/api";

export default function PositionsList() {
  /*   const dispatch = useDispatch(); */
  /* const positions = useSelector((state) => state.positionListReducer.positions); */

  const { vehicle } = useRoute().params;
  const [positions, setPositions] = useState();

  useEffect(() => {
    api.get(`recruitmentpositionapi/vehicles/${vehicle.id}/positions`).then(({ data }) => {
      setPositions(data);
    });
  }, [vehicle]);

  /* useEffect(() => {
    GetPositionList(dispatch);
  }, []); */

  return <View style={styles.container}>{positions ? <Text style={styles.text}>{positions.id}</Text> : <Text style={styles.container}>Teste</Text>}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: "#f5ffff",
  },
});
