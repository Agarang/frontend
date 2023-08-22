import React from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import styled from "styled-components/native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const MainContainer = styled.View`
  width: ${Width}px;
`;

const StyledImage = styled.Image`
  width: ${Width}px;
`;

const StyledView = styled.ScrollView`
  flex: 1;
`;

const ServiceInfo = () => {
  return (
    <StyledView>
      <MainContainer>
        <StyledImage source={require("../../assets/images/intro-img.png")} />
      </MainContainer>
    </StyledView>
  );
};

export default ServiceInfo;
