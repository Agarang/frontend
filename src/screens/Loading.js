import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const PercentageText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const StateText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const Loading = ({ navigation }) => {
  return (
    <Container>
      <PercentageText>20%</PercentageText>
      <StateText>우리 아이 사진 생성중...</StateText>
      <StateText>(32초 남았어요!)</StateText>
      <Button
        title="완료페이지로"
        onPress={() => navigation.navigate("Complete")}
      />
    </Container>
  );
};

export default Loading;
