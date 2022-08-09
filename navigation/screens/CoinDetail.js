import { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tailwind from "twrnc";
import CoinOverview from "../../components/byScreen/coin/CoinOverview";
import SkeletonLoad from "../../components/helpers/SkeletonLoad";
import { coinData } from "../../store/slices/marketActions";
import { selectedCoin } from "../../store/slices/marketSlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  addFavorite,
  favorites,
  toggleFavorite,
} from "../../store/slices/favoritesSlice";

export default function CoinDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const coinInfo = useSelector(selectedCoin);
  const currentFavorites = useSelector(favorites);

  const isFavorited = !!currentFavorites.find(
    (fav) => fav.id === route.params.coinId
  );

  useEffect(() => {
    dispatch(coinData(route.params.coinId));
  }, [route.params.coinId, coinInfo.id]);

  return (
    <SafeAreaView style={tailwind`bg-[#060c10] h-full items-center `}>
      {Object.keys(coinInfo.data).length !== 0 &&
        !coinInfo.status.loading &&
        coinInfo.data.id === coinInfo.id && (
          <TouchableOpacity
            style={tailwind`absolute right-2 bottom-3 h-12 w-12 bg-[#f91880] z-50 rounded-full items-center justify-center`}
            onPress={() =>
              dispatch(
                toggleFavorite({
                  id: coinInfo.id,
                  thumb: coinInfo.data.image.thumb,
                  name: coinInfo.data.name,
                  symbol: coinInfo.data.symbol,
                })
              )
            }
          >
            <Ionicons
              name="bookmark"
              size={20}
              style={tailwind`text-${isFavorited ? "[#000000]" : "[#ffffff]"}`}
            />
          </TouchableOpacity>
        )}

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
