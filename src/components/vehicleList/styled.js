import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center
  margin: 30px 20px 0 20px;
  border-radius: 5px;
  border: 1px solid #d2a455;
`;

export const Descriptions = styled.View`
  max-width: 70%;
  padding: 10px;
  margin-left: 5px;
  color: #f5ffff;
`;

export const CarModel = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Plate = styled.Text`
  color: #f5ffff;
  font-size: 25px;
  margin-left: 10px;
`;

export const CarBrand = styled.Text`
  color: #f5ffff;
  font-size: 15px;

  /* &:first-child {
    margin-left: 15px;
  } */
`;

export const CarDescription = styled.Text`
  color: #f5ffff;
`;
