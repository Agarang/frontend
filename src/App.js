import React, { useState, useEffect } from "react";
import Navigation from "./navigations";
import { LogBox } from "react-native";
import UserContext from "./contexts/User";

export default function App() {
  const [setting1value, setSetting1value] = useState("initialValue1");
  const [setting2value, setSetting2value] = useState(false);

  const toggleSetting2 = () => {
    setting3 ? setSetting2value(true) : setSetting2value(false);
  };

  const userSettings = {
    setting1name: setting1value,
    setting2name: setting2value,
    setSetting1value,
    toggleSetting2,
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Sending"]);
  }, []);

  return (
    <UserContext.Provider value={userSettings}>
      <Navigation />
    </UserContext.Provider>
  );
}
