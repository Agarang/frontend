import React, { useMemo, useState } from "react";
import styled from "styled-components/native";
import { Text, Image, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioGroup from "react-native-radio-buttons-group";

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
  text-align: center;
`;

//항목 텍스트
const ItemText = styled.Text`
  margin: 10px 5px 5px 5px;
  width: 70%;
  font-size: 12px;
  color: #4e5256;
`;

const StyledHeaderText = styled.Text`
  font-size: 20px;
  margin: 2px;
  font-weight: 700;
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
  width: 37%;
  height: 55px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1.5px solid #ffc7bf;
`;

const MeetButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 60%;
  height: 55px;
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
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff1ef;
`;

const MainHeaderContainer = styled.SafeAreaView`
  display: block;
  width: 100%;
  padding-right: 20px;
  margin: 30px 5px 30px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.Text`
  align-self: center;
  margin-left: 40%;
  font-weight: 600;
  font-size: 20px;
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

const HeaderView = styled.View`
  align-items: center;
  margin-top: 5px;
`;

const PregressBarContainer = styled.Image`
  width: 95px;
  height: 75px;
  object-fit: contain;
`;
const ExtraInfo1 = ({ navigation }) => {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        size: 20,
        color: "#FF7360",
        label: "엄마",
        value: "1",
        labelStyle: styles.labelStyle,
      },
      {
        id: "2",
        size: 20,
        color: "#FF7360",
        label: "아빠",
        value: "2",
        labelStyle: styles.labelStyle,
      },
      {
        id: "3",
        size: 20,
        color: "#FF7360",
        label: "그 외 가족",
        value: "3",
        labelStyle: styles.labelStyle,
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();

  const RadioSelected = () => {
    setSelectedId;
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#fff1ef" }}>
      <Container>
        <MainHeaderContainer>
          <HeaderText>추가정보 입력</HeaderText>
          <CloseBtnContainer onPress={() => navigation.navigate("Landing")}>
            <StyledIcon
              source={require("../../assets/images/close-btn-icon.png")}
            />
          </CloseBtnContainer>
        </MainHeaderContainer>
        <Image source={require("../../assets/images/line-img.png")} />

        <HeaderView>
          <PregressBarContainer
            source={require("../../assets/images/progressbar2-img.png")}
          />

          <StyledHeaderText>정말 반가워요!</StyledHeaderText>
          <StyledHeaderText>
            <Text style={{ color: "#FF7360" }}>회원가입</Text>이 완료되었어요!
          </StyledHeaderText>

          <StyledText>
            회원님과 아이에 대해 조금만 더 알려주시면{"\n"}좀 더 원활한 대화를
            할 수 있어요
          </StyledText>
        </HeaderView>
        <ItemText>이름</ItemText>
        <StyledInput placeholder="이산모" />

        <ItemText>생년월일</ItemText>
        <StyledInput placeholder="8자 ex)19800101" />

        <ItemText>우리아이의 태명을 알려주세요.</ItemText>
        <StyledInput placeholder="우리아이의 태명은 뭔가요?" />
        <ItemText>닉네임</ItemText>
        <StyledInput placeholder="뭐라고 불러드릴까요?" />
        <ItemText style={{ marginTop: 25 }}>
          우리 아이와는 어떤 관계이신가요?
        </ItemText>

        <RadioGroup
          layout="row"
          labelStyle={{ color: "blue" }}
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
        <ButtonsContainer>
          <RetryButton onPress={() => navigation.navigate("main")}>
            <RetryText>건너뛰기</RetryText>
          </RetryButton>
          <MeetButton onPress={() => navigation.navigate("ExtraInfo2")}>
            <ButtonText>다음</ButtonText>
          </MeetButton>
        </ButtonsContainer>
      </Container>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  labelStyle: { fontWeight: 600, color: "#4e5256" },
  picBack: { width: 350, height: 420 },
});

export default ExtraInfo1;
