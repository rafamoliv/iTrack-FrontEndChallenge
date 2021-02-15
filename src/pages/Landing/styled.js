import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 145px;
  margin-bottom: 50px;
`;

export const Body = styled.View`
  border: 1px solid #d2a455;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const CarImg = styled.Image`
  width: 50px;
  height: 35px;
  margin-right: 10px;
`;

export const Btn = styled.Text`
  color: #d2a455;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  top: +2px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Img = styled.Image`
  width: 100px;
  height: 25px;
`;
