import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import tailwind from "twrnc";
import SectionalHeading from "../../components/helpers/SectionalHeading";

export default function Preferences() {
  return (
    <Layout color="#171f29">
      <SectionalHeading fs="xl" title="Preferences" mt={4} mb={3} />
    </Layout>
  );
}
