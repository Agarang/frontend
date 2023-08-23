import React, { useMemo, useState } from "react";
import styled from "styled-components/native";
import { Text, Dimensions, StyleSheet } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledHeaderText = styled.Text`
  font-size: 20px;
  margin: 2px;
  font-weight: 700;
`;

const StyledText = styled.Text`
  margin: 10px 5px 5px 10px;
  width: 70%;
  font-size: 12px;
  color: #4e5256;
`;

const ItemsContainer = styled.View`
  width: 80%;
  flex-direction: row;
`;

const ItemContainer = styled.View`
  width: 50%;
  margin-top: 30px;
`;

const StyledInput = styled.TextInput`
  width: 90%;
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
  const [selectedId, setSelectedId] = useState();
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        size: 20,
        color: "#FF7360",
        label: "여자",
        value: "1",
        labelStyle: styles.labelStyle,
      },
      {
        id: "2",
        size: 20,
        color: "#FF7360",
        label: "남자",
        value: "2",
        labelStyle: styles.labelStyle,
      },
      {
        id: "3",
        size: 20,
        color: "#FF7360",
        label: "아직 몰라요",
        value: "3",
        labelStyle: styles.labelStyle,
      },
    ],
    []
  );
  return (
    <Container>
      <StyledHeaderText>
        <Text style={{ color: "#FF7360" }}>산모</Text>님과{" "}
        <Text style={{ color: "#FF7360" }}>쑥쑥이</Text>에 대해
      </StyledHeaderText>
      <StyledHeaderText>조금만 더 알려주세요!</StyledHeaderText>

      <ItemsContainer>
        <ItemContainer>
          <StyledText>산모의 키</StyledText>
          <StyledInput placeholder="160kg" />
        </ItemContainer>
        <ItemContainer>
          <StyledText>산모의 몸무게</StyledText>
          <StyledInput placeholder="160cm" />
        </ItemContainer>
      </ItemsContainer>

      <ItemsContainer>
        <ItemContainer>
          <StyledText>우리아이가 찾아온 날</StyledText>
          <StyledInput placeholder="23.08.01" />
        </ItemContainer>
        <ItemContainer>
          <StyledText>출산 예정일</StyledText>
          <StyledInput placeholder="23.07" />
        </ItemContainer>
      </ItemsContainer>
      <StyledText style={{ marginTop: 30 }}>성별</StyledText>
      <RadioGroup
        layout="row"
        labelStyle={{ color: "blue" }}
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
      <ButtonsContainer>
        <RetryButton onPress={() => navigation.navigate("Main")}>
          <RetryText>건너뛰기</RetryText>
        </RetryButton>
        <MeetButton onPress={() => navigation.navigate("Main")}>
          <ButtonText>저장하기</ButtonText>
        </MeetButton>
      </ButtonsContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: 600,
    color: "#4e5256",
    justifyContent: "space-evenly",
  },
  picBack: { width: 350, height: 420, fontWeight: 600, color: "#4e5256" },
});

export default ExtraInfo2;
