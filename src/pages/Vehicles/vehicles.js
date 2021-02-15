import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PositionsList from "~/components/positionsList";
import { useRoute } from "@react-navigation/native";
import api from "~/services/api";

/* import { useDispatch, useSelector } from "react-redux";
import { GetPositionList } from "~/store/Actions/positionActions"; */

export default function Vehicles() {
  const { vehicle } = useRoute().params;
  const [positions, setPositions] = useState([]);
  const [lastPos, setLastPos] = useState([]);

  /*   const dispatch = useDispatch();
  const positions = useSelector((state) => state.vehicleListReducer.positions);

  useEffect(() => {
    GetPositionList(dispatch);
  }, []); */

  useEffect(() => {
    async function getPositions() {
      await api.get(`recruitmentpositionapi/vehicles/${vehicle.id}/positions`).then(({ data }) => {
        if (data) {
          setPositions(getTravels(data));
          setLastPos(data);
        }
      });
    }
    getPositions();
  }, [vehicle]);

  function getTravels(setPositions) {
    var positions = [];
    var position = null;

    for (let p of setPositions) {
      if (p.ignition) {
        if (position === null) position = p;
        if (position !== null && setPositions[setPositions.length - 1].id === p.id) {
          positions.push({
            vehicleId: p.vehicleId,
            initialDateTime: p.datetime,
            finalDateTime: null,
            initialAddress: p.address,
            finalAddress: null,
            distanceInMeters: 0,
            totalTimeInMinutes: 0,
          });
        }
      }

      if (!p.ignition && position !== null) {
        positions.push({
          vehicleId: p.vehicleId,
          initialDateTime: position?.datetime,
          finalDateTime: p.datetime,
          initialAddress: position?.address,
          finalAddress: p.address,
          distanceInMeters: parseInt(p.hodometro) - parseInt(position?.hodometro),
          totalTimeInMinutes: (p.datetime - position?.datetime) / 60000,
        });

        position = null;
      }
    }

    return positions;
  }

  var lastPosition = lastPos[lastPos.length - 1];

  return (
    <View style={styles.container}>
      <FlatList data={positions} keyExtractor={(item, index) => String(index)} renderItem={({ item, index }) => <PositionsList data={item} index={index} />} />
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
