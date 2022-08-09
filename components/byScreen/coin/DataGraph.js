import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function DataGraph() {
  return (
    <View style={tailwind`h-60 w-full bg-[#0a1319] my-2 rounded-lg`}>
      <Text>DataGraph</Text>
    </View>
  );
}
