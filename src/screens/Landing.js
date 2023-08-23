import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Dimensions, TouchableOpacity, Alert } from "react-native";
import API from "../utils/API";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
  height: ${Height}px;
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
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const handleEmailInput = (e) => {
    setEmailInput(e);
  };

  const handlePwInput = (e) => {
    setPwInput(e);
  };

  const onClick = (e) => {
    const request = {
      email: emailInput,
      password: pwInput,
    };
    console.log(emailInput);
    console.log(pwInput);

    API.post("/api/v1/auth/sign-in", request, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        navigation.navigate("Main");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("아이디와 비밀번호를 확인해주세요");
      });
  };
  return (
    <Container>
      <LogoContainer>
        <Text>Logo</Text>
      </LogoContainer>

      <StyledInput
        type="text"
        placeholder="email@email.com"
        onChangeText={handleEmailInput}
      />

      <StyledInput
        secureTextEntry={true}
        type="password"
        placeholder="******"
        onChangeText={handlePwInput}
      />

      <StyledButton onPress={onClick}>
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
