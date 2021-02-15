import React from "react";
import { Text } from "react-native";
import { Container, Body, IndexMap, ImgMap, TextMap, TravelsBody, TravelsText } from "./styled";

export default function PositionsList({ data, index }) {
  const i = index + 1;

  const dateObject = new Date(data.dateTime);
  const dateFormat = dateObject.toLocaleString();

  const dateObjectFinal = new Date(data.finalDateTime);
  const dateFormatFinal = dateObjectFinal.toLocaleString();

  return (
    <Container>
      <Body>
        <IndexMap>
          <ImgMap source={require("~/assets/images/maps.png")} />
          <TextMap>Viagem {i}</TextMap>
        </IndexMap>
        {data.finalDateTime ? (
          <TravelsBody>
            <TravelsText>Saída: {data.address}</TravelsText>
            <TravelsText>Chegada: {data.finalAddress}</TravelsText>

            <Text> </Text>

            <TravelsText>Km rodados: {data.distanceKm} km</TravelsText>
            <TravelsText>Conclusão: {dateFormatFinal}</TravelsText>
          </TravelsBody>
        ) : (
          <TravelsBody>
            <TravelsText>{data.address}</TravelsText>

            <Text> </Text>

            <TravelsText>Início: {dateFormat}</TravelsText>
          </TravelsBody>
        )}
      </Body>
    </Container>
  );
}
