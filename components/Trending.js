import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useTrending from "../hooks/useTrending";
import CoinCard from "./helpers/CoinCard";
import SectionalHeading from "./helpers/SectionalHeading";
import ImageTemp from "./helpers/ImageTemp";

export default function Trending() {
  const { data, loading, errMsg } = useTrending();

  return loading && !data ? (
    <View>
      <Text>loading</Text>
    </View>
  ) : (
    <FlatList
      ListHeaderComponent={
        <>
          <SectionalHeading title="Welcome" fs="xl" mt="4" mb="4" />
          <ImageTemp
            src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/05/03/105181918-COINBASE.1910x1000.jpg"
            height={60}
            width="full"
          />
          <SectionalHeading title="Trending coins" fs="lg" mt="5" mb="2" />
        </>
      }
      nestedScrollEnabled
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item: { item } }) => <CoinCard coin={item} />}
    />
  );
}
