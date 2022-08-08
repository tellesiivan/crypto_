import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import useSearch from "../../../hooks/useSearch";
import { useSelector } from "react-redux";
import { selectSearch } from "../../../store/slices/marketSlice";
import CoinCard from "../../../components/helpers/CoinCard";
import tailwind from "twrnc";

export default function Results() {
  const search = useSelector(selectSearch);
  const { data, loading, triggerSearch } = useSearch();

  useEffect(() => {
    if (search.query) {
      triggerSearch(search.query);
    }
  }, [search.query]);

  return (
    <Layout>
      <View>
        {loading || !data ? (
          <Text style={tailwind`text-gray-200 text-center mt-3`}>
            Loading...
          </Text>
        ) : (
          <FlatList
            style={tailwind`pt-4`}
            keyExtractor={(item) => item.id}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CoinCard coin={item} />}
          />
        )}
      </View>
    </Layout>
  );
}
