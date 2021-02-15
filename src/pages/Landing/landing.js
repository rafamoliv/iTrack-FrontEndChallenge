import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, Logo, Body, CarImg, Btn, Footer, Img } from "./styled";

export default function Landing({ navigation }) {
  return (
    <Container>
      <Logo source={require("~/assets/images/intertrackLogo.png")} />
      <TouchableOpacity onPress={() => navigation.navigate("SearchStack")}>
        <Body>
          <CarImg source={require("~/assets/images/default.png")} />
          <Btn>Meus carros</Btn>
        </Body>
      </TouchableOpacity>
      <Footer>
        <Img source={require("~/assets/images/roGold.png")} />
      </Footer>
    </Container>
  );
}
