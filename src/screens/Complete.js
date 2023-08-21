import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const Complete = () => {
  return (
    <Container>
      <Text>사진 완성 페이지</Text>
    </Container>
  );
};

export default Complete;
