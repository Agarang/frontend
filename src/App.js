import React from "react";
import Navigation from "./navigations";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Sending..."]);
export default function App() {
  return <Navigation />;
}
