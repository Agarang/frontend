import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import API from "../utils/API";
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
  height: ${Height}px;
`;

const StyledText = styled.Text`
  margin: 10px 5px 5px 5px;
  width: 70%;
  font-size: 12px;
  color: #4e5256;
`;

const FirstText = styled.Text`
  margin: 30px 5px 5px 5px;
  width: 70%;
  font-size: 12px;
  color: #4e5256;
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
  margin-top: 300px;
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

const CloseBtnContainer = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: flex-end;
`;

const StyledIcon = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
const MainHeaderContainer = styled.SafeAreaView`
  display: block;
  width: 100%;
  padding-right: 20px;
  margin: 10px 5px 30px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.Text`
  align-self: center;
  margin-left: 44%;
  font-weight: 600;
  font-size: 20px;
`;

const SignUp = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [confirmPwInput, setConfirmPwInput] = useState("");

  const handleEmailInput = (e) => {
    setEmailInput(e);
  };

  const handlePhoneInput = (e) => {
    setPhoneInput(e);
  };

  const handlePwInput = (e) => {
    setPwInput(e);
  };

  const handleConfirmPwInput = (e) => {
    setConfirmPwInput(e);
  };

  const onClick = (e) => {
    const request = {
      email: emailInput,
      phoneNumber: phoneInput,
      password: pwInput,
    };

    API.post("/api/v1/user/sign-up", request, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        navigation.navigate("ExtraInfo1");
      })
      .catch((error) => {
        setPwInput("");
        setConfirmPwInput("");
        console.log(error);
        Alert.alert("비밀번호를 확인해주세요");
      });
  };
  return (
    <KeyboardAwareScrollView>
      <Container>
        <MainHeaderContainer>
          <HeaderText>회원가입</HeaderText>
          <CloseBtnContainer onPress={() => navigation.navigate("Landing")}>
            <StyledIcon
              source={require("../../assets/images/close-btn-icon.png")}
            />
          </CloseBtnContainer>
        </MainHeaderContainer>
        <Image source={require("../../assets/images/line-img.png")} />
        <>
          <FirstText>이메일주소</FirstText>
          <StyledInput
            type="text"
            placeholder="email@email.com"
            value={emailInput}
            onChangeText={handleEmailInput}
          />

          <StyledText>휴대폰 번호</StyledText>
          <StyledInput
            type="text"
            placeholder="010-1234-5678"
            onChangeText={handlePhoneInput}
            value={phoneInput}
          />

          <StyledText>비밀번호</StyledText>
          <StyledInput
            secureTextEntry={true}
            type="password"
            placeholder="영문/숫자/특수문자 혼합 8~20자"
            value={pwInput}
            onChangeText={handlePwInput}
          />
          <StyledInput
            secureTextEntry={true}
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            value={confirmPwInput}
            onChangeText={handleConfirmPwInput}
          />
          <StyledButton onPress={onClick}>
            <ButtonText>완료</ButtonText>
          </StyledButton>
        </>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
