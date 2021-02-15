import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #20325d;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 20px;
`;

export const TitleMap = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 0px;
  padding: 20px;
`;

export const LoadingView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.Image`
  margin-top: 70px;
  width: 40px;
  height: 40px;
`;
