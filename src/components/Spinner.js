import React from "react";
import { PulseLoader } from "react-spinners";
import { Text } from "react-native";

const Spinner = () => {
  return (
    <>
      <Text>잠시만 기다려주세요</Text>
      <PulseLoader />
    </>
  );
};

export default Spinner;
