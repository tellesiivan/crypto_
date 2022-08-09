import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "twrnc";
import ImageTemp from "../../helpers/ImageTemp";
import Ionicons from "react-native-vector-icons/Ionicons";
import DataGraph from "./DataGraph";
import Description from "./Description";
import { useNavigation } from "@react-navigation/native";
export default function CoinOverview({ coin }) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={tailwind`flex-row justify-between items-center bg-[#0a1319] p-2 mt-2 rounded-lg`}
      >
        <TouchableOpacity
          style={tailwind`h-9 w-9 rounded-full z-40 shadow-2xl items-center justify-center bg-[#060c10]`}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            style={tailwind`text-gray-300`}
          />
        </TouchableOpacity>
        <View style={tailwind`flex-row items-center`}>
          <ImageTemp
            src={coin?.image.thumb ?? coin.image.small}
            height={6}
            width={6}
          />
          <Text style={tailwind`text-white font-semibold ml-2`}>
            {coin.name ? coin.name : coin.symbol.toUpperCase()}
          </Text>
        </View>
      </View>
      <DataGraph />
      <Description />
    </View>
  );
}
