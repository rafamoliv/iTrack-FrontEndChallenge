import React, { useEffect, useState } from "react";
import PositionsList from "~/components/positionsList";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Container, Body, Footer, BtnText } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import api from "~/services/api";

export default function Positions() {
  const { vehicle } = useRoute().params;
  const [positions, setPositions] = useState([]);
  const [lastPos, setLastPos] = useState([]);

  const navigation = useNavigation();

  function vehicleMap(lastPosition) {
    navigation.navigate("MapVehicle", {
      lastPosition: lastPosition,
    });
  }

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

    for (var p of setPositions) {
      if (p.ignition) {
        if (position === null) position = p;
        if (position !== null && setPositions[setPositions.length - 1].id === p.id) {
          positions.push({
            vehicleId: p.vehicleId,

            dateTime: p.datetime,
            finalDateTime: null,

            address: p.address,
            finalAddress: null,

            distanceKm: 0,
          });
        }
      }

      if (!p.ignition && position !== null) {
        positions.push({
          vehicleId: p.vehicleId,

          dateTime: position?.datetime,
          finalDateTime: p.datetime,

          address: position?.address,
          finalAddress: p.address,

          distanceKm: (parseFloat(p.hodometro) - parseFloat(position?.hodometro)) / 1000,
        });

        position = null;
      }
    }

    return positions;
  }

  var lastPosition = lastPos[lastPos.length - 1];

  return (
    <Container>
      {lastPos.length > 0 ? (
        <Body>
          <FlatList
            data={positions}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => <PositionsList data={item} index={index} />}
          />
          <TouchableOpacity onPress={() => vehicleMap(lastPosition)}>
            <Footer>
              <Ionicons name="navigate-circle-outline" color="#d2a455" size={50} />
              <BtnText>Encontre meu carro</BtnText>
            </Footer>
          </TouchableOpacity>
        </Body>
      ) : (
        <BtnText>Veículo não encontrado</BtnText>
      )}
    </Container>
  );
}
