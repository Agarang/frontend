import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
} from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import * as axios from "axios";
import API from "../utils/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";

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
  padding-right: 20px;
  margin: 30px 5px 5px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHeaderText = styled.Text`
  padding-left: 20px;
  font-size: 19px;
  margin: 15px 2px 2px 2px;
  font-weight: 700;
`;

const SubHeaderContainer = styled.View`
  width: 100%;
  margin: 12px 0px 5px 5px;
  padding-right: 0;
  display: flex;
  flex-direction: row;
`;

const DdayBackground = styled.ImageBackground`
  width: 150px;
  height: 100px;
  margin-left: 50px;
  padding: 30px 30px 30px 37px;
`;

const DdayText = styled.Text`
  font-size: 15px;
  color: white;
`;

const IconsContainer = styled.SafeAreaView`
  margin-top: 20px;
  margin-right: 20px;
  flex-direction: row;
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: 3px;
  margin-right: 2px;
`;

const LogoText = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  color: #ff7360;
  font-size: 22px;
  font-weight: 700;
`;

const StyledIcon = styled.Image`
  margin-top: 2px;
  margin-left: 2px;
  margin-right: 2px;
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const LogoIcon = styled.Image`
  margin-top: 21px;
  margin-left: 17px;
  width: 130px;
  height: 30px;
  object-fit: contain;
`;

const ToGalaryContainer = styled.TouchableOpacity`
  margin-top: 26px;
  margin-right: 17px;
  padding-top: 110px;
  padding-bottom: 110px;
  padding-right: 42px;
  padding-left: 44px;
  background-color: #fff1ef;
  border-radius: 5px;
  border: 2px dashed #ffc7bf;
  align-self: center;
  justify-content: center;
  text-align: center;
`;

const ChatIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 65px;
  object-fit: contain;
`;

//갤러리 아이콘
const GalaryIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 80px;
  object-fit: contain;
`;

const GallaryText = styled.Text`
  color: #ff8f80;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin-top: 7px;
  font-weight: 800;
  font-size: 18px;
`;

const PicContainer = styled.View`
  width: 100%;
  height: 47%;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
`;

//버튼 스타일
const StyledButton = styled.TouchableOpacity`
  margin-right: 17px;
  margin-top: 16px;
  width: 36%;
  height: 36px;
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
  margin-top: 7px;
  font-weight: 600;
  font-size: 15px;
`;

const DateText = styled.Text`
  color: white;
  margin-top: 50px;
`;
const NavContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const Nav = styled.ImageBackground`
  width: 210px;
  margin-left: 9px;
  height: 85px;
  margin-bottom: 5px;
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
let result;

const Main = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState([]);
  const [generatedImage, setGeneratedImage] = useState("");
  const [resetImage, setResetImage] = useState(false);

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

  // useEffect(() => console.log(`제너레이티드 이미지: ${generatedImage}`));

  const pickImage = async () => {
    try {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const image = result.assets.pop();

        console.log(`result uri : ${image.uri}`);
        setSelectedImage(image.uri);
        setSelectedImageInfo(image);
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

  const spinner = (
    <Spinner
      visible={loading}
      textContent={"로딩 중..."}
      textStyle={{ color: "white" }}
    />
  );

  return (
    <MainContainer>
      <ImageBackground
        source={require("../../assets/images/bg-img-seperated.png")}
        style={styles.bgImage}
      >
        <MainHeaderContainer>
          <LogoIcon source={require("../../assets/images/top-logo-icon.png")} />
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
          <StyledHeaderText>
            <Text style={{ color: "#FF7360" }}>콩닥이</Text>의{" "}
            <Text style={{ color: "#FF7360" }}>엄마</Text>님 안녕하세요!{"\n"}
            콩닥이와 대화해요!
            <DateText>{"\n\n"}2023.09</DateText>
          </StyledHeaderText>

          <DdayBackground
            source={require("../../assets/images/dday-background.png")}
          >
            <DdayText>콩닥이와 만날 날</DdayText>
            <DdayText style={{ marginLeft: 5 }}>
              D-
              <Text style={{ fontWeight: 700, fontSize: 35, marginTop: 5 }}>
                {" "}
                28
              </Text>
            </DdayText>
          </DdayBackground>
        </SubHeaderContainer>

        <ImageBackground
          source={require("../../assets/images/day-container2-img.png")}
          style={styles.dayImage}
        ></ImageBackground>
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
              <StyledButton
                onPress={async () => {
                  console.log(`Click Button Selected Image : ${selectedImage}`);

                  const body = new FormData();

                  try {
                    const imageInfo = selectedImageInfo;

                    const uri = imageInfo?.uri;

                    console.log(`url : ${uri}`);

                    const fileName = imageInfo?.fileName;

                    console.log(`fileName : ${fileName}`);

                    const ext = fileName?.split(".").slice(-1).toString();

                    console.log(`ext : ${ext}`);

                    const type = `images/${ext}`;

                    const fetus = {
                      uri,
                      type,
                      name: fileName,
                    };

                    console.log(
                      `width : ${imageInfo.width},  height : ${imageInfo.height}`
                    );

                    console.log(`fileSize : ${imageInfo.fileSize}`);

                    console.log(`fetus : ${fetus}`);

                    body.append("fetus", fetus);

                    console.log(body);
                    const jwt = await AsyncStorage.getItem("login_token");

                    console.log(`jwt : ${jwt}`);

                    const res = await API.post("/api/v1/photo/fetus", body, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${jwt}`,
                      },
                    });

                    setGeneratedImage(res.data.data.url);
                    console.log(`Response : ${res.data.data.url}`);
                    url = res.data.data.url;
                  } catch (error) {
                    console.log("Images Send Error : ", error);
                    console.log(`generatedImage: ${generatedImage}`);
                  }

                  return navigation.navigate("Complete", {
                    url,
                  });
                }}
              >
                <ButtonText>아가 보러 가기</ButtonText>
              </StyledButton>
            ) : (
              <StyledButton onPress={pickImage}>
                <ButtonText>초음파 업데이트</ButtonText>
              </StyledButton>
            )}
          </ImageBackground>
        </PicContainer>
        <NavContainer>
          <Nav source={require("../../assets/images/main-navigation-img.png")}>
            <IconContainer onPress={() => navigation.navigate("Chat")}>
              <ChatIcon source={require("../../assets/images/chat_icon.png")} />
            </IconContainer>
          </Nav>
        </NavContainer>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  bgImage: { width: "100%", height: "100%" },
  picBack: { width: 350, height: 420, marginTop: 0 },
  dayImage: {
    width: 435,
    height: 108,
    alignSelf: "center",
  },
});

export default Main;
