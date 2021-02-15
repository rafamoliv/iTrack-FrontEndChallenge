import React from "react";

//: Assets
import { Container, Left, Name, Description, Image, Info } from "./styles";

export default function Travels({ data, index }) {
  return (
    <Container status={data.finalDateTime}>
      <Left>
        <Info>
          <Name>Viagem {index + 1}</Name>
          {data.finalDateTime ? (
            <Description>
              {data.initialAddress} á {data.finalAddress}
            </Description>
          ) : (
            <Description>{data.initialAddress}</Description>
          )}
        </Info>
      </Left>
    </Container>
  );
}
