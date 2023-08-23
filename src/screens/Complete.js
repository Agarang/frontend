import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const StyledHeaderText = styled.Text`
  font-size: 20px;
  margin: 2px;
  font-weight: 700;
`;

const CharacterImg = styled.Image`
  width: 310px;
  height: 310px;
  object-fit: contain;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 10px;
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

const ItemText = styled.Text`
  margin-top: 150px;
  font-size: 15px;
  color: #4e5256;
`;

const TextContainer = styled.Text`
  margin-top: 50px;
  flex-direction: column;
`;

const Complete = ({ navigation }) => {
  return (
    <Container>
      <StyledHeaderText>
        우리 <Text style={{ color: "#FF7360" }}>튼튼이</Text>의
      </StyledHeaderText>
      <StyledHeaderText>사진이 완성되어 도착했어요!</StyledHeaderText>
      <CharacterImg
        source={require("../../assets/images/character-complete-img.png")}
      />

      <ItemText>
        자, 이제 우리{" "}
        <Text style={{ color: "#FF7360", fontWeight: 600 }}>튼튼이</Text>를
        만나러 가보실까요?
      </ItemText>

      <StyledButton onPress={() => navigation.navigate("Result")}>
        <ButtonText>우리 아가 만나러 가기</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Complete;
