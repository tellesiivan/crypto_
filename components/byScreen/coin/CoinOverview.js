import { View, Text, TouchableOpacity } from "react-native";
import { useMemo, React } from "react";
import tailwind from "twrnc";
import ImageTemp from "../../helpers/ImageTemp";
import Ionicons from "react-native-vector-icons/Ionicons";
import DataGraph from "./DataGraph";
import Description from "./Description";
import { useNavigation } from "@react-navigation/native";
import Box from "../../helpers/Box";

export default function CoinOverview({ coin }) {
  const navigation = useNavigation();

  const chart = useMemo((props) => {
    return <DataGraph />;
  }, []);

  return (
    <View>
      <View
        style={tailwind`flex-row justify-between items-center bg-[#0c151d] p-2 mt-2 rounded-lg`}
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
      {chart}

      {coin.sentiment_votes_up_percentage &&
        coin.sentiment_votes_down_percentage && (
          <Box headTitle="Sentiment votes" my={1.5}>
            <View>
              <View
                style={tailwind`w-full flex-row items-center justify-between mb-1`}
              >
                <Text style={tailwind`text-white font-semibold ml-2`}>
                  {coin.sentiment_votes_up_percentage}%
                </Text>
                <Text style={tailwind`text-white font-semibold ml-2`}>
                  {coin.sentiment_votes_down_percentage}%
                </Text>
              </View>
              <View
                style={tailwind`w-full h-3 mb-2 rounded-full relative flex-row overflow-hidden`}
              >
                <View
                  style={tailwind`w-${coin.sentiment_votes_up_percentage} h-full bg-green-300`}
                ></View>
                <View
                  style={tailwind`w-${coin.sentiment_votes_down_percentage} h-full bg-red-300`}
                ></View>
              </View>
            </View>
          </Box>
        )}

      <Description />
    </View>
  );
}
