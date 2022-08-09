import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import tailwind from "twrnc";
import SectionalHeading from "../../components/helpers/SectionalHeading";
import { useSelector } from "react-redux";
import { favorites } from "../../store/slices/favoritesSlice";

const opts = [
  { navigateTo: "Home", title: "Trending" },
  { navigateTo: "Search", title: "Search" },
];

export default function Favorites({ navigation }) {
  const currentFavs = useSelector(favorites);

  return (
    <Layout>
      {currentFavs.length > 0 ? (
        <View style={tailwind`items-center justify-center h-full`}>
          <SectionalHeading
            title={`You have ${currentFavs.length} favorites.`}
            fs="lg"
          />
        </View>
      ) : (
        <View style={tailwind`items-center justify-center h-full`}>
          <SectionalHeading title="You have no favorites." fs="lg" />
          <View style={tailwind`mt-3 flex-row w-44 justify-between`}>
            {opts.map((opt) => (
              <TouchableOpacity
                key={opt.navigateTo}
                style={tailwind`px-4 py-2 rounded-full bg-[#171f29]`}
                onPress={() => navigation.navigate(opt.navigateTo)}
              >
                <Text style={tailwind`text-gray-200`}>{opt.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({});
