import { TouchableOpacity, Text, View } from "react-native";
import React, { useEffect } from "react";
import tailwind from "twrnc";
import ImageTemp from "./ImageTemp";
import useConvertUSD from "../../hooks/useConvertUSD";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedCoinId } from "../../store/slices/marketSlice";

export default function CoinCard({ coin }) {
  const dispatch = useDispatch();
  const { convertPrice, convertedPrice } = useConvertUSD();
  const navigation = useNavigation();

  useEffect(() => {
    const getPrice = async () => {
      await convertPrice(coin.id);
    };
    getPrice();
  }, []);

  return (
    <TouchableOpacity
      style={tailwind`py-6 w-full bg-[#171f29] my-1 rounded-lg flex-row items-center px-3 justify-between`}
      onPress={() => {
        dispatch(setSelectedCoinId(coin.id));
        /* 1. Navigate to the Details route with params */
        navigation.navigate("CoinDetail", {
          coinId: coin.id,
          otherParam: "anything you want here",
        });
        /* 2. Add id */
      }}
    >
      <View style={tailwind`flex-row `}>
        <View style={tailwind`mr-4`}>
          <ImageTemp src={coin.thumb} height={8} width={8} />
        </View>
        <View>
          <Text style={tailwind`text-white mb-1 font-semibold`}>
            {coin.name}
          </Text>
          <Text style={tailwind`text-gray-300`}>{coin.symbol}</Text>
        </View>
      </View>
      {convertedPrice && (
        <Text style={tailwind`text-white`}>
          {(convertedPrice || convertedPrice !== undefined) &&
            `$${Object.values(convertedPrice)[0].usd}`}
        </Text>
      )}
    </TouchableOpacity>
  );
}
