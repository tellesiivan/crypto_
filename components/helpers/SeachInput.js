import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import tailwind from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearch,
  setSearchQuery,
  setSearchType,
} from "../../store/slices/marketSlice";
import useSearch from "../../hooks/useSearch";
import { useNavigation } from "@react-navigation/native";

export default function SeachInput() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const search = useSelector(selectSearch);
  const [inputValue, setInputValue] = useState(search.query);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(search.query);
  }, [search.query]);

  const handleSubmit = () => {
    if (search.query.trim() > 2) return;

    dispatch(setSearchQuery(inputValue.trim()));
    setIsFocused(false);
    navigation.navigate("Results");
  };

  return (
    <View
      style={tailwind`h-12 w-[90%] mx-3 bg-[#ffffff] rounded-full  flex-row items-center shadow-2xl`}
    >
      <TextInput
        returnKeyType="search"
        style={tailwind`h-full w-[90%] pl-4`}
        onFocus={() => setIsFocused(true)}
        blurOnSubmit={true}
        value={inputValue}
        placeholder="Start searching ..."
        placeholderTextColor="#555555"
        // value={search.query}
        onChangeText={(newText) => setInputValue(newText)}
        onSubmitEditing={handleSubmit}
      />
      <Ionicons
        name="search"
        size={24}
        style={tailwind`ml-auto pr-2 ${
          isFocused ? "text-[#ff75c6]" : "text-gray-400"
        }`}
      />
    </View>
  );
}
