import { Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function SectionalHeading({ title, fs, mt, mb, icon }) {
  return (
    <View
      style={tailwind`flex-row items-center ${mb && `mb-${mb}`} ${
        mt && `mt-${mt}`
      } `}
    >
      <Text
        style={tailwind`text-white font-semibold ${fs && `text-${fs}`} ${
          icon && "mr-1"
        }`}
      >
        {title}
      </Text>
      {icon && <Text>{icon}</Text>}
    </View>
  );
}
