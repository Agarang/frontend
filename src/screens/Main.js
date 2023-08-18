import React from "react";
import {
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
`;
const Container = styled.SafeAreaView`
  flex: 3;
  background-color: #fff1ef;
  align-items: center;
  justify-content: center;
`;

const MainHeaderContainer = styled.SafeAreaView`
  display: block;
  width: 90%;
  margin: 12px 5px 5px 5px;
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const LogoContainer = styled.SafeAreaView``;
const IconsContainer = styled.SafeAreaView`
  flex-direction: row;
`;
const LogoText = styled.Text`
  color: #ff7360;
  font-size: 22px;
  font-weight: 700;
`;

const StyledIcon = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: 3px;
  margin-right: 2px;
`;

const UploadContainer = styled.View`
  float: left;
`;

const ChatIcon = styled.Image`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const PicContainer = styled.View`
  width: 100%;
  height: 60%;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
`;

const ToAlbumButton = styled.TouchableOpacity`
  width: 200px;
  height: 100px;
`;

const Main = ({ navigation }) => {
  return (
    <MainContainer>
      <ImageBackground
        source={require("../../assets/images/bg-img-seperated.png")}
        style={styles.bgImage}
      >
        <MainHeaderContainer>
          <LogoText>Service Logo</LogoText>
          <IconsContainer>
            <IconContainer>
              <StyledIcon
                source={require("../../assets/images/notification_icon.png")}
              />
            </IconContainer>
            <IconContainer>
              <StyledIcon
                source={require("../../assets/images/drawer_icon.png")}
              />
            </IconContainer>
          </IconsContainer>
        </MainHeaderContainer>
        <Text>쑥쑥이의 엄마님 안녕하세요! {"\n"}쑥쑥이와 대화해요!</Text>

        <Text>메인페이지</Text>

        <PicContainer>
          <ImageBackground
            source={require("../../assets/images/main-pic-container.png")}
            style={styles.picBack}
          >
            <ToAlbumButton>
              <Text>앨범</Text>
            </ToAlbumButton>
          </ImageBackground>
        </PicContainer>

        <IconContainer onPress={() => navigation.navigate("Chat")}>
          <ChatIcon source={require("../../assets/images/chat_icon.png")} />
        </IconContainer>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  bgImage: { width: "100%", height: "100%" },
  picBack: { width: 350, height: 420 },
});
export default Main;
