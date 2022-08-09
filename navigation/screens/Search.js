import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import tailwind from "twrnc";
import SeachInput from "../../components/helpers/SeachInput";
import Layout from "../../components/Layout";
import useSearch from "../../hooks/useSearch";
import { setSearchQuery, setSearchType } from "../../store/slices/marketSlice";
import { popularCoins } from "../../utils/PopularCoins";
import PrimarySearch from "./search/PrimarySearch";
import Results from "./search/Results";

const image = {
  uri: "https://cdn.dribbble.com/users/942818/screenshots/16438995/media/c21e16707c4016fdf054cc0816e4d661.jpg?compress=1&resize=840x630&vertical=top",
};

const SearchStack = createNativeStackNavigator();

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={tailwind`h-full`}>
      <View style={tailwind`flex-1`}>
        <ImageBackground source={image} style={styles.image}>
          <SeachInput />
        </ImageBackground>
      </View>
      <View style={tailwind`py-2 w-full bg-[#ffffff]`}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularCoins}
          keyExtractor={(item) => item.title}
          renderItem={({ item: { title, color } }) => (
            <TouchableOpacity
              onPress={() => {
                // dispatch : allow query to be reused in results page
                dispatch(setSearchQuery(title));
                // navigate to results page stack
                navigation.navigate("Results");
              }}
              style={tailwind`mx-1 h-8 rounded-full bg-${color}-300 w-26 items-center justify-center`}
            >
              <Text>{title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={tailwind`flex-2 `}>
        <SearchStack.Navigator>
          <SearchStack.Screen
            name="Results"
            component={Results}
            options={{ headerShown: false }}
          />
          <SearchStack.Screen
            name="PrimarySearch"
            component={PrimarySearch}
            options={{ headerShown: false }}
          />
        </SearchStack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
