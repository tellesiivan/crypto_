import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import useSearch from "../../../hooks/useSearch";
import { useSelector } from "react-redux";
import { selectSearch } from "../../../store/slices/marketSlice";
import CoinCard from "../../../components/helpers/CoinCard";
import tailwind from "twrnc";
import SkeletonLoad from "../../../components/helpers/SkeletonLoad";

export default function Results() {
  const search = useSelector(selectSearch);
  const { data, loading, triggerSearch, errMsg } = useSearch();

  useEffect(() => {
    if (search.query) {
      triggerSearch(search.query);
    }
  }, [search.query]);

  return (
    <Layout>
      <View>
        {loading ? (
          <SkeletonLoad />
        ) : data?.length > 0 ? (
          <FlatList
            style={tailwind`pt-4`}
            keyExtractor={(item) => item.id}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CoinCard coin={item} />}
          />
        ) : (
          <Text style={tailwind`text-gray-200 text-center mt-3`}>
            Start searching...
          </Text>
        )}
      </View>
    </Layout>
  );
}
