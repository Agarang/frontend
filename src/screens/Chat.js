import React, { useState, useEffect, useCallback } from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { GiftedChat } from "react-native-gifted-chat";
import API from "../utils/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.SafeAreaView`
  background-color: #fff1ef;
  flex: 1;
  width: 100%;
`;

const MainHeaderContainer = styled.SafeAreaView`
  width: 100%;
  padding-right: 20px;
  margin: 10px 5px 20px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.Text`
  align-self: center;
  font-weight: 600;
  font-size: 20px;
`;

const ProfileBtnContainer = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: flex-end;
`;

const StyledIcon = styled.Image`
  margin: 8px 8px 0 8px;
  width: 23px;
  height: 23px;
  object-fit: contain;
`;
const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let i = 1;

  useEffect(() => {
    // setMessages([
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await API.get("/api/v1/chatbot/fetus/");
        setUsers(response.data);
        console.log(response);
      } catch (e) {
        setError(e);
        console.log("catch");
      }
      setLoading(false);
    };
    fetchUsers();
    //   {
    //     _id: 1,
    //     text: "엄마 오늘 하루는 어떠신가요?",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    // ]);
  }, []);

  const onSend = useCallback(async (messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const jwt = await AsyncStorage.getItem("login_token");

    console.log(`메시지 : ${messages[0].text}`);

    const res = await API.post(
      "/api/v1/chatbot/fetus",
      {
        input: `${messages[0].text}`,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const data = res.data.data;

    console.log(`response : ${data.response}`);
    console.log(`createdAt : ${data.createdAt}`);

    setMessages((previousMessages) => {
      console.log(previousMessages);

      return GiftedChat.append(previousMessages, [
        {
          _id: i++,
          text: `${data.response}`,
          createdAt: new Date(),
          user: {
            _id: i++,
            name: "Space",
          },
        },
      ]);
    });
  }, []);

  return (
    <Container>
      <MainHeaderContainer>
        <ProfileBtnContainer onPress={() => navigation.navigate("Main")}>
          <StyledIcon
            source={require("../../assets/images/pink-home-icon.png")}
          />
        </ProfileBtnContainer>
        <HeaderText>
          <Text style={{ color: "#FF7360" }}>콩닥이</Text>와의 대화
        </HeaderText>
        <ProfileBtnContainer onPress={() => navigation.navigate("Mypage")}>
          <StyledIcon
            source={require("../../assets/images/pink-profile-img.png")}
          />
        </ProfileBtnContainer>
      </MainHeaderContainer>
      <Image source={require("../../assets/images/line-img.png")} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        bottomOffset={10}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
};

export default Chat;
