import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectedCoin } from "../../../store/slices/marketSlice";
import ConvertStringToHTML from "../../../utils/ConvertStringToHTML";
import tailwind from "twrnc";
import SectionalHeading from "../../helpers/SectionalHeading";

export default function Description() {
  const coinInfo = useSelector(selectedCoin);
  const coin = coinInfo.data;

  return (
    <View>
      {/* {coin.description?.en && (
        <View>
          <SectionalHeading title="Description" fs="lg" mb={2} />
          <Text style={tailwind`text-gray-200`}>
            <Text>
              {ConvertStringToHTML(coin.description.en) || coin.description.en}
            </Text>
          </Text>
        </View>
      )} */}
      {coin.categories?.length > 0 && (
        <View>
          <View style={tailwind`mt-5 mb-4 border-t border-gray-600 `}>
            <View style={tailwind`flex-row flex-wrap mt-3`}>
              {coin.categories.map((cat) => (
                <View
                  key={cat}
                  style={tailwind`px-3 py-2 bg-[#0e1b23] mr-1.5 mb-1.5 rounded-full`}
                >
                  <Text style={tailwind`text-gray-300 tracking-wider text-sm`}>
                    {cat}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
