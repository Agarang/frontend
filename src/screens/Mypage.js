import React from "react";
import { Text, StyleSheet, ImageBackground, Image } from "react-native";
import styled from "styled-components/native";

const MainContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 12px;
  padding-top: 10px;
  align-self: center;
  width: 90%;
  height: 120px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 3px solid #ff7360;
`;

const ButtonText = styled.Text`
  margin-left: 20px;
  margin-top: 27px;
  margin-bottom: 2px;
  font-weight: 600;
  font-size: 20px;
`;

const ProfileImg = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 25px;
`;

const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
`;

const ProfileNameContainer = styled.View`
  margin-left: 15px;
`;

const StyledIcon = styled.Image`
  width: 18px;
  height: 18px;
  object-fit: contain;
  margin-top: 22px;
  margin-left: 7px;
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

const StyledText = styled.Text`
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  margin-top: 33px;
`;

const BabyContainer = styled.View`
  flex: 2;
  width: 90%;
`;

const InfoContainer = styled.View`
  flex: 3;
  width: 90%;
`;

const BabyTitle = styled.Text`
  margin-top: 55px;
  margin-left: 12px;
  font-size: 20px;
  font-weight: 600;
`;

const StyledImage = styled.Image`
  width: 85px;
  height: 85px;
  margin-top: 2px;
  margin-left: 15px;
  border-radius: 15px;
`;

const BabyNameContainer = styled.View``;
const ImageContainer = styled.View``;
const ButtonContents = styled.View`
  flex-direction: row;
`;

const SmallText = styled.Text`
  color: #4e5256;
`;

const DateText = styled.Text`
  color: #4e5256;
  margin-left: 20px;
`;

const IconContainer = styled.Image`
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-left: 7px;
  margin-top: 7px;
`;

const Contents = styled.Text`
  margin-top: 9px;
  font-size: 20px;
  margin-left: 7px;
  font-weight: 500;
`;

const ContentsContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin: 12px;
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

const ChatIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 65px;
  object-fit: contain;
`;

const Mypage = ({ navigation }) => {
  return (
    <MainContainer>
      <ImageBackground
        source={require("../../assets/images/bg-img-seperated2.png")}
        style={styles.bgImage}
      >
        <Container>
          <MainHeaderContainer>
            <HeaderText>마이페이지</HeaderText>
          </MainHeaderContainer>
          <Image source={require("../../assets/images/line-img.png")} />
          <ProfileContainer>
            <ProfileImg
              source={require("../../assets/images/profile-img.png")}
            />
            <ProfileNameContainer>
              <StyledText>
                <Text style={{ color: "#FF7360" }}>콩닥맘</Text> 님
              </StyledText>

              <SmallText>콩닥이 엄마 • D-28</SmallText>
            </ProfileNameContainer>
          </ProfileContainer>
          <BabyContainer>
            <BabyTitle>우리 아가</BabyTitle>
            <StyledButton>
              <ButtonContents>
                <ImageContainer>
                  <StyledImage
                    source={require("../../assets/images/interview-after-img.png")}
                  />
                </ImageContainer>
                <BabyNameContainer>
                  <ButtonContents>
                    <ButtonText>콩닥이</ButtonText>
                    <StyledIcon
                      source={require("../../assets/images/male-icon.png")}
                    />
                  </ButtonContents>
                  <DateText>23.08.01 예정일</DateText>
                </BabyNameContainer>
              </ButtonContents>
            </StyledButton>
          </BabyContainer>
          <InfoContainer>
            <ContentsContainer>
              <IconContainer
                source={require("../../assets/images/setting-icon.png")}
              />
              <Contents>내 정보 관리ㅤㅤ</Contents>
              <IconContainer
                style={{ width: "100%", justifyContent: "flex-end" }}
                source={require("../../assets/images/right-arrow-icon.png")}
              />
            </ContentsContainer>
            <Image source={require("../../assets/images/dotted-line.png")} />
            <ContentsContainer
              onPress={() => navigation.navigate("ServiceInfo")}
            >
              <IconContainer
                source={require("../../assets/images/info-icon.png")}
              />
              <Contents>서비스 소개 ㅤㅤ</Contents>
              <IconContainer
                style={{
                  width: "100%",
                  marginRight: 0,
                  paddingRight: 0,
                }}
                source={require("../../assets/images/right-arrow-icon.png")}
              />
            </ContentsContainer>
            <Image source={require("../../assets/images/dotted-line.png")} />
            <ContentsContainer>
              <IconContainer
                source={require("../../assets/images/announce-icon.png")}
              />
              <Contents style={{ marginRight: "15px" }}>
                공지사항 ㅤㅤ ㅤ
              </Contents>
              <IconContainer
                style={{
                  width: "100%",
                  justifyContent: "flex-end",
                }}
                source={require("../../assets/images/right-arrow-icon.png")}
              />
            </ContentsContainer>
            <Image source={require("../../assets/images/dotted-line.png")} />
          </InfoContainer>
        </Container>
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
});

export default Mypage;
