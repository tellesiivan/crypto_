import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import tailwind from "twrnc";

export default function CoinDetail({ route, navigation }) {
  return (
    <SafeAreaView style={tailwind`bg-[#060c10] h-full items-center`}>
      <TouchableOpacity
        style={tailwind`bg-[#0a1319] absolute h-12 w-12  rounded-full top-12 left-4  z-40 shadow-2xl flex items-center justify-center`}
        onPress={() => navigation.goBack()}
      >
        <Text style={tailwind`text-gray-100`}>Back</Text>
      </TouchableOpacity>
      <View style={tailwind`px-3 `}>
        <Text>{route.params.coinId}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
