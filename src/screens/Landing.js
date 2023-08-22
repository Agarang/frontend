import React from "react";
import styled from "styled-components/native";
import { Text, Dimensions, TouchableOpacity } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
  height: ${Height};
`;

const LogoContainer = styled.SafeAreaView`
  margin-bottom: 110px;
`;

const StyledInput = styled.TextInput`
  width: 80%;
  height: 45px;
  margin: 3px;
  padding: 15px;
  background-color: #ffffff;
  border: #ffc7bf;
  border-radius: 50px;
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

const ButtonsContainer = styled.View`
  margin: 20px;
  flex-direction: row;
`;

const Landing = ({ navigation }) => {
  console.log(Width);
  console.log(typeof Width);
  return (
    <Container>
      <LogoContainer>
        <Text>Logo</Text>
      </LogoContainer>

      <StyledInput placeholder="email@email.com" />
      <StyledInput placeholder="******" />

      <StyledButton onPress={() => navigation.navigate("Main")}>
        <ButtonText>로그인</ButtonText>
      </StyledButton>
      <ButtonsContainer>
        <TouchableOpacity>
          <Text>아이디 찾기 </Text>
        </TouchableOpacity>
        <Text> / </Text>
        <TouchableOpacity>
          <Text> 비밀번호 찾기 </Text>
        </TouchableOpacity>
        <Text> / </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text> 회원가입</Text>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};

export default Landing;
