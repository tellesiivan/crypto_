import { useEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tailwind from "twrnc";
import CoinOverview from "../../components/byScreen/coin/CoinOverview";
import SkeletonLoad from "../../components/helpers/SkeletonLoad";
import { coinData } from "../../store/slices/marketActions";
import { selectedCoin } from "../../store/slices/marketSlice";

export default function CoinDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const coinInfo = useSelector(selectedCoin);

  useEffect(() => {
    dispatch(coinData(route.params.coinId));
  }, [route.params.coinId]);

  return (
    <SafeAreaView style={tailwind`bg-[#060c10] h-full items-center`}>
      <ScrollView style={tailwind`px-2 w-full`} alwaysBounceVertical={false}>
        {coinInfo.status.loading ? (
          <SkeletonLoad />
        ) : Object.keys(coinInfo.data).length !== 0 ? (
          <CoinOverview coin={coinInfo.data} />
        ) : (
          <Text>No data</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
