import { View, SafeAreaView } from "react-native";
import React from "react";
import Trending from "./Trending";
import tailwind from "twrnc";

export default function PrimaryHome() {
  return (
    <SafeAreaView style={tailwind`bg-[#081118] h-full`}>
      <View style={tailwind`px-3 `}>
        <Trending />
      </View>
    </SafeAreaView>
  );
}
