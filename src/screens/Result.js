import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, ImageBackground, Image, View } from "react-native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #fff1ef;
  flex: 1;
`;

const StyledHeaderText = styled.Text`
  font-size: 21px;
  margin: 2px;
  font-weight: 700;
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
  width: 37%;
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

//하단 버튼 2개 컨테이너
const ButtonsContainer = styled.SafeAreaView`
  margin-top: 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff1ef;
`;

const IconsContainer = styled.SafeAreaView`
  margin-right: 28px;
  flex-direction: row;
`;

const IconContainer = styled.TouchableOpacity`
  margin: 0 4px;
`;

const StyledIcon = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const CheckboxIcon = styled.Image`
  margin-top: 4px;
  margin-left: 15px;
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const ItemText = styled.Text`
  margin-top: 5px;
  margin-left: 7px;
  font-size: 17px;
  color: #4e5256;
  font-weight: 500;
`;

const MainHeaderContainer = styled.SafeAreaView`
  display: block;
  width: 95%;
  margin: 25px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  align-items: center;
  margin-top: 70px;
  margin-bottom: 12px;
`;

const CloseBtnContainer = styled.TouchableOpacity`
  margin-top: 20px;
  margin-right: 10px;
  width: 100%;
  align-items: flex-end;
`;
const Result = ({ navigation, route }) => {
  const [image, setImage] = useState("");
  const url = route.params.url;
  console.log(`키 두번째: ${url}`);
  // const res = async () => {
  //   await axios.get(generatedImage);
  //   setImage(res.data);
  // };

  // useEffect(() => {
  //   console.log(`이미지는 : ${image}`);
  // });
  // console.log(generatedImage);
  // console.log(typeof image);
  // console.log(`image: ${res.data}`);
  return (
    <Container>
      <CloseBtnContainer onPress={() => navigation.navigate("Main")}>
        <StyledIcon
          source={require("../../assets/images/close-btn-icon.png")}
        />
      </CloseBtnContainer>
      <HeaderContainer>
        <StyledHeaderText>짜잔! 우리 귀여운</StyledHeaderText>
        <StyledHeaderText>
          <Text style={{ color: "#FF7360" }}>콩닥이</Text>의 사진이에요.
        </StyledHeaderText>
      </HeaderContainer>
      <PicContainer>
        <ImageBackground
          source={require("../../assets/images/main-pic-container.png")}
          style={styles.picBack}
        >
          <Image
            source={{ uri: url }}
            style={{
              width: 300,
              height: 300,
              borderRadius: 5,
              marginTop: 23,
              marginLeft: 16,
            }}
          />
          <MainHeaderContainer>
            <View style={{ flexDirection: "row" }}>
              <CheckboxIcon
                source={require("../../assets/images/checkbox-icon-checked.png")}
              />
              <ItemText>아기 프로필 설정하기</ItemText>
            </View>
            <IconsContainer>
              <IconContainer>
                <StyledIcon
                  source={require("../../assets/images/download-icon.png")}
                />
              </IconContainer>
              <IconContainer onPress={() => navigation.navigate("Mypage")}>
                <StyledIcon
                  source={require("../../assets/images/share-icon.png")}
                />
              </IconContainer>
            </IconsContainer>
          </MainHeaderContainer>
        </ImageBackground>
      </PicContainer>
      <ButtonsContainer>
        <RetryButton onPress={() => navigation.navigate("main")}>
          <RetryText>다시하기</RetryText>
        </RetryButton>
        <MeetButton>
          <ButtonText>저장하기</ButtonText>
        </MeetButton>
      </ButtonsContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  bgImage: { width: "100%", height: "100%" },
  picBack: { width: 350, height: 420, marginLeft: 4 },
});

export default Result;
