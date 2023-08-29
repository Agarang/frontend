import React, { useState, useEffect, useCallback } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { GiftedChat, Bubble, Avatar } from "react-native-gifted-chat";
import API from "../utils/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

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
  margin-top: 4px;
  font-weight: 600;
  font-size: 20px;
`;

const ProfileBtnContainer = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: flex-end;
`;

const StyledIcon = styled.Image`
  margin: 8px 15px 0 15px;
  width: 23px;
  height: 23px;
  object-fit: contain;
`;
const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let i = 3;

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
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "우리가 만나는 날까지 28일 남았어요!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "콩닥이",
          avatar: require("../../assets/images/baby-profile-img.png"),
        },
      },
    ]);
  }, []);

  const renderBubble = (props) => {
    const { currentMessage } = props;
    return (
      <>
        <View>
          <Text style={{ marginLeft: 5, marginBottom: 2 }}>
            {currentMessage.user.name}
          </Text>
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "#FF7360", // 오른쪽 말풍선 배경색
              },
              left: {
                backgroundColor: "#ffffff", // 왼쪽 말풍선 배경색
              },
            }}
          />
        </View>
      </>
    );
  };

  const renderSend = (props) => {
    return (
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          marginRight: 15,
        }}
        onPress={() => props.onSend({ text: props.text.trim() }, true)}
      >
        <Image
          source={require("../../assets/images/send-btn.png")}
          style={{ width: 25, height: 25, marginBottom: 10 }}
        />
      </TouchableOpacity>
    );
  };

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
            name: "콩닥이",
            avatar: require("../../assets/images/baby-profile-img.png"),
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
        placeholder="우리 아가랑 대화해 보세요"
        messages={messages}
        onSend={(messages) => onSend(messages)}
        bottomOffset={40}
        user={{
          _id: 1,
          text: "우리가 만나는 날까지 28일 남았어요!",
          // name: "콩닥이",
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        // renderMessage={renderMessage}
      />
    </Container>
  );
};

export default Chat;
