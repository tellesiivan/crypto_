import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function DeveloperDataList({ data }) {
  const updatedObjct = () => {
    let initialData = data;

    const {
      last_4_weeks_commit_activity_series,
      code_additions_deletions_4_weeks,
      ...newObj
    } = initialData;

    return newObj;
  };

  const devData = updatedObjct();

  function toTitleCase(str) {
    const arr = str.split("_");

    const result = [];

    for (const word of arr) {
      result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return result.join(" ");
  }

  return (
    <View>
      {Object.keys(devData).map((key, index) => {
        return (
          <View
            key={index}
            style={tailwind`flex-row w-full items-center justify-between my-1`}
          >
            <Text style={tailwind`text-gray-400 font-semibold `}>
              {toTitleCase(key)}
            </Text>
            <Text style={tailwind`text-gray-200 font-semibold `}>
              {devData[key]}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
