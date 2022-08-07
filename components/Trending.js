import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useTrending from "../hooks/useTrending";
import CoinCard from "./helpers/CoinCard";
import SectionalHeading from "./helpers/SectionalHeading";
import ImageTemp from "./helpers/ImageTemp";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function Trending() {
  const { data, loading, errMsg } = useTrending();
  const navigation = useNavigation();

  return loading && !data ? (
    <View>
      <Text>loading</Text>
    </View>
  ) : (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={tailwind`flex-row justify-between my-4 items-center`}>
            <SectionalHeading title="Welcome" fs="xl" />
            <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
              <SectionalHeading title="Settings" fs="sm" />
            </TouchableOpacity>
          </View>

          <ImageTemp
            src="https://images.squarespace-cdn.com/content/v1/53fe4a70e4b0a2293ab0e42a/1588603835845-UPDW9MNLCZ46ROP80301/Blog+Header.png?format=1000w"
            height={60}
            width="full"
          />
          <SectionalHeading title="Trending coins" fs="lg" mt="5" mb="2" />
        </>
      }
      nestedScrollEnabled
      keyExtractor={(item) => item.item.id}
      data={data}
      renderItem={({ item: { item } }) => <CoinCard coin={item} />}
    />
  );
}
