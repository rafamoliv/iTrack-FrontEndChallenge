import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BrandImg from "../brandImg/index";
import { Container, Descriptions, Plate, CarModel, CarBrand, CarDescription } from "./styled";

export default function VehicleList({ data }) {
  return (
    <Container>
      <BrandImg value={data.model} />
      <Descriptions>
        <Plate>{data.name}</Plate>
        <CarModel>
          <CarBrand>{data.brand}</CarBrand>
          <CarBrand> {data.model}</CarBrand>
        </CarModel>
        <CarDescription>{data.description}</CarDescription>
      </Descriptions>
    </Container>
  );
}
