import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const CharacterImg = styled.Image`
  width: 310px;
  height: 310px;
  object-fit: contain;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7360;
  border: 3px solid #ff6853;
`;

const ButtonText = styled.Text`
  color: white;
  align-self: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: 800;
  font-size: 18px;
`;

const Complete = ({ navigation }) => {
  return (
    <Container>
      <Text>우리 쑥쑥이</Text>
      <Text>사진이 완성되어 도착했어요!</Text>
      <CharacterImg
        source={require("../../assets/images/character-complete-img.png")}
      />

      <Text>자, 이제 우리 쑥쑥이를 만나러 가보실까요?</Text>

      <StyledButton onPress={() => navigation.navigate("Result")}>
        <ButtonText>우리 아가 만나러 가기</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Complete;
