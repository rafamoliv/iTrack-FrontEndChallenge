import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 5px;
  padding: 7px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.status ? '#165923' : '#591616'}
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  margin-top: 4px;
  font-size: 12px;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #fff;
`;

