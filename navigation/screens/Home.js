import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryHome from "../../components/PrimaryHome";
import CoinDetail from "./CoinDetail";

export default function Home() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="PrimaryHome"
        component={PrimaryHome}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CoinDetail"
        component={CoinDetail}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
