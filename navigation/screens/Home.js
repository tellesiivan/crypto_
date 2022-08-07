import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";
import ImageTemp from "../../components/helpers/ImageTemp";
import SectionalHeading from "../../components/helpers/SectionalHeading";
import Trending from "../../components/Trending";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryHome from "../../components/PrimaryHome";

export default function Home() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="PrimaryHome"
        component={PrimaryHome}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
