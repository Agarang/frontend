import React from "react";
import styled from "styled-components/native";
import { Text, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledText = styled.Text`
  margin: 10px 5px 5px 5px;
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
  margin-top: 350px;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7360;
  border: 3px solid #ff6853;
`;

const RetryButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 35%;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1.5px solid #ffc7bf;
`;

const MeetButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 60%;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7360;
  border: 1.5px solid #ff6853;
`;

//다시하기 텍스트
const RetryText = styled.Text`
  color: #ff7360;
  align-self: center;
  justify-content: center;
  margin-top: 17px;
  font-weight: 600;
  font-size: 17px;
`;

//저장하기 텍스트
const ButtonText = styled.Text`
  color: white;
  align-self: center;
  justify-content: center;
  margin-top: 17px;
  font-weight: 600;
  font-size: 17px;
`;

const ButtonsContainer = styled.SafeAreaView`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff1ef;
`;

const ExtraInfo2 = ({ navigation }) => {
  return (
    <Container>
      <Text>정말 반가워요!</Text>
      <Text>회원가입이 완료되었어요!</Text>
      <StyledText>
        회원님과 아이에 대해 조금만 더 알려주시면{"\n"}좀 더 원활한 대화를 할 수
        있어요
      </StyledText>
      <StyledText>산모의 키</StyledText>
      <StyledInput placeholder="이산모" />

      <StyledText>생년월일</StyledText>
      <StyledInput placeholder="8자 ex)19800101" />

      <StyledText>우리아이의 태명을 알려주세요.</StyledText>
      <StyledInput placeholder="우리아이의 태명은 뭔가요?" />
      <StyledText>닉네임</StyledText>
      <StyledInput placeholder="뭐라고 불러드릴까요?" />
      <StyledText>우리 아이와는 어떤 관계이신가요?</StyledText>

      <ButtonsContainer>
        <RetryButton onPress={() => navigation.navigate("main")}>
          <RetryText>건너뛰기</RetryText>
        </RetryButton>
        <MeetButton onPress={() => navigation.navigate("Result")}>
          <ButtonText>저장하기</ButtonText>
        </MeetButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ExtraInfo2;
