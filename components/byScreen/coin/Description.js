import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectedCoin } from "../../../store/slices/marketSlice";
import tailwind from "twrnc";
import Box from "../../helpers/Box";
import DeveloperDataList from "./DeveloperDataList";

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
        <Box headTitle="Categories" my={1.5}>
          <View style={tailwind`flex-row flex-wrap `}>
            {coin.categories.map((cat) => (
              <View
                key={cat}
                style={tailwind`px-3 py-2 bg-[#05090b] mr-1.5 mb-1.5 rounded-full`}
              >
                <Text style={tailwind`text-gray-300 tracking-wider text-sm`}>
                  {cat}
                </Text>
              </View>
            ))}
          </View>
        </Box>
      )}
      {Object.keys(coin.developer_data).length !== 0 && (
        <Box headTitle="Developer Data" my={1.5}>
          <DeveloperDataList data={coin.developer_data} />
        </Box>
      )}
    </View>
  );
}
