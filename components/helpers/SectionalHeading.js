import { Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function SectionalHeading({ title, fs, mt, mb }) {
  return (
    <Text
      style={tailwind`mb-${mb} mt-${mt} text-${fs} text-white font-semibold`}
    >
      {title}
    </Text>
  );
}
