import React from "react";
import styled from "styled-components/native";
import { Text, Dimensions, Image } from "react-native";

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
  return (
    <Container>
      <MainHeaderContainer>
        <HeaderText>회원가입</HeaderText>
        <CloseBtnContainer onPress={() => navigation.navigate("Main")}>
          <StyledIcon
            source={require("../../assets/images/close-btn-icon.png")}
          />
        </CloseBtnContainer>
      </MainHeaderContainer>
      <Image source={require("../../assets/images/line-img.png")} />
      <>
        <FirstText>이메일주소</FirstText>
        <StyledInput placeholder="email@email.com" />

        <StyledText>휴대폰 번호</StyledText>
        <StyledInput placeholder="010-1234-5678" />

        <StyledText>비밀번호</StyledText>
        <StyledInput placeholder="영문/숫자/특수문자 혼합 8~20자" />
        <StyledInput placeholder="비밀번호를 한 번 더 입력해주세요" />
        <StyledButton onPress={() => navigation.navigate("ExtraInfo1")}>
          <ButtonText>완료</ButtonText>
        </StyledButton>
      </>
    </Container>
  );
};

export default SignUp;
