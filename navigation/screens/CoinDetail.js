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
      <View style={tailwind`px-3 w-full`}>
        <View
          style={tailwind`flex-row justify-between items-center bg-[#0a1319] py-2 px-3 mt-2 rounded-lg`}
        >
          <TouchableOpacity
            style={tailwind`h-12 w-12 rounded-full z-40 shadow-2xl items-center justify-center`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tailwind`text-gray-100`}>Back</Text>
          </TouchableOpacity>
          <Text style={tailwind`text-white font-semibold`}>
            {route.params.coinId}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
