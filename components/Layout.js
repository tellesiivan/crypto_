import { View, SafeAreaView } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Layout({ children, color }) {
  return (
    <SafeAreaView
      style={tailwind`${color ? `bg-[${color}]` : "bg-[#081118]"} h-full`}
    >
      <View style={tailwind`px-3 `}>{children}</View>
    </SafeAreaView>
  );
}
