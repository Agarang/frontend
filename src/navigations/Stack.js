import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Landing,
  SignUp,
  Main,
  Chat,
  Loading,
  Complete,
  Result,
  ExtraInfo1,
  ExtraInfo2,
  ServiceInfo,
  Mypage,
} from "../screens";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    //Stack.Navigator 안에 이거 넣으면 전체 헤더 감추기 됨 screenOptions={{ headerShown: false }}
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#fff1ef" },
        }}
      />

      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Complete" component={Complete} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="ExtraInfo1" component={ExtraInfo1} />
      <Stack.Screen name="ExtraInfo2" component={ExtraInfo2} />
      <Stack.Screen name="ServiceInfo" component={ServiceInfo} />
      <Stack.Screen name="Mypage" component={Mypage} />
    </Stack.Navigator>
  );
};

export default StackNav;
