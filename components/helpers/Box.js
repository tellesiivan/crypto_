import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";
import SectionalHeading from "./SectionalHeading";

export default function Box({ children, headTitle, my }) {
  return (
    <View
      style={tailwind`bg-[#0c151d] border-gray-600 px-2 py-5 rounded-lg ${
        my && `my-${my}`
      }`}
    >
      <SectionalHeading title={headTitle} mb={6} fs={4.5} />
      {children}
    </View>
  );
}
