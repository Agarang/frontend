import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, ImageBackground } from "react-native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const PicContainer = styled.View`
  width: 100%;
  height: 60%;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
`;

//다시하기 버튼
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
const Result = ({ navigation }) => {
  return (
    <Container>
      <Text>짜잔! 우리 귀여운</Text>
      <Text>쑥쑥이의 사진이에요</Text>
      <PicContainer>
        <ImageBackground
          source={require("../../assets/images/main-pic-container.png")}
          style={styles.picBack}
        ></ImageBackground>
      </PicContainer>
      <ButtonsContainer>
        <RetryButton onPress={() => navigation.navigate("main")}>
          <RetryText>다시하기</RetryText>
        </RetryButton>
        <MeetButton onPress={() => navigation.navigate("Result")}>
          <ButtonText>저장하기</ButtonText>
        </MeetButton>
      </ButtonsContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  bgImage: { width: "100%", height: "100%" },
  picBack: { width: "350px", height: "420px" },
});

export default Result;
