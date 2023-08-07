import React from "react";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>태어나조 팀 파이팅</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
