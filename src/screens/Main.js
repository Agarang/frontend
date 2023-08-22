import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
} from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

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
  width: 100%;
  margin: 12px 5px 5px 5px;
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const SubHeaderContainer = styled.View`
  display: block;
  width: 100%;
  margin: 12px 0px 5px 5px;
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const DdayBackground = styled.ImageBackground`
  width: 130px;
  height: 100px;
  object-fit: cover;
  padding: 30px;
`;

const DdayText = styled.Text`
  font-size: 12px;
  color: white;
`;

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

const ToGalaryContainer = styled.TouchableOpacity`
  margin-top: 20px;
  margin-right: 14px;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-right: 60px;
  padding-left: 60px;
  background-color: #fff1ef;
  border-radius: 5px;
  border: 2px dashed #ffc7bf;
  align-self: center;
  justify-content: center;
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

//갤러리 아이콘
const GalaryIcon = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const GallaryText = styled.Text`
  color: #ff8f80;
  align-self: center;
  justify-content: center;
  margin-top: 7px;
  font-weight: 800;
  font-size: 18px;
`;

const PicContainer = styled.View`
  width: 100%;
  height: 60%;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
`;

//버튼 스타일
const StyledButton = styled.TouchableOpacity`
  margin-right: 17px;
  margin-top: 16px;
  width: 40%;
  height: 40px;
  border-radius: 50px;
  background-color: #ff7360;
  border: 3px solid #ff6853;
  align-self: center;
`;

//버튼 텍스트
const ButtonText = styled.Text`
  color: white;
  align-self: center;
  justify-content: center;
  margin-top: 8px;
  font-weight: 600;
  font-size: 16px;
`;

const Main = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("갤러리 접근 권한이 필요합니다.");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log("Error picking image: ", error);
    }
  };

  const handleNavigateToResult = () => {
    if (selectedImage) {
      navigation.navigate("Result", { selectedImage });
    } else {
      pickImage();
    }
  };

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
            <IconContainer onPress={() => navigation.navigate("Mypage")}>
              <StyledIcon
                source={require("../../assets/images/drawer_icon.png")}
              />
            </IconContainer>
          </IconsContainer>
        </MainHeaderContainer>

        <SubHeaderContainer>
          <Text>쑥쑥이의 엄마님 안녕하세요! {"\n"}쑥쑥이와 대화해요!</Text>

          <DdayBackground
            source={require("../../assets/images/dday-background.png")}
          >
            <DdayText>쑥쑥이와 만날 날</DdayText>
            <DdayText>D-20</DdayText>
          </DdayBackground>
        </SubHeaderContainer>
        <PicContainer>
          <ImageBackground
            source={require("../../assets/images/main-pic-container.png")}
            style={styles.picBack}
          >
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 5,
                  marginTop: 23,
                  marginLeft: 16,
                }}
              />
            ) : (
              <ToGalaryContainer onPress={handleNavigateToResult}>
                <GalaryIcon
                  source={require("../../assets/images/galary-icon.png")}
                />
                <GallaryText>
                  초음파 사진 업로드하여{"\n"}우리 아이의 사진을 만들어 보세요!
                </GallaryText>
              </ToGalaryContainer>
            )}
            {selectedImage ? (
              <StyledButton onPress={() => navigation.navigate("Loading")}>
                <ButtonText>아가 보러 가기</ButtonText>
              </StyledButton>
            ) : (
              <StyledButton onPress={pickImage}>
                <ButtonText>초음파 업데이트</ButtonText>
              </StyledButton>
            )}
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
