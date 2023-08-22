import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 80%;
  height: 100px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1.5px solid #ff7360;
`;

const ButtonText = styled.Text`
  align-self: center;
  justify-content: center;
  margin-top: 17px;
  font-weight: 600;
  font-size: 17px;
`;

const Mypage = () => {
  return (
    <MainContainer>
      <ImageBackground
        source={require("../../assets/images/bg-img-seperated.png")}
        style={styles.bgImage}
      >
        <Container>
          <Text>닉네임 님</Text>
          <Text>쑥쑥이 엄마</Text>
          <Text>우리 아가</Text>
          <StyledButton onPress={() => navigation.navigate("Result")}>
            <ButtonText>쑥쑥이(태명)</ButtonText>
          </StyledButton>
          <Text>내 정보 관리</Text>
          <Text>서비스 소개</Text>
          <Text>공지사항</Text>
        </Container>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  bgImage: { width: "100%", height: "100%" },
});

export default Mypage;
