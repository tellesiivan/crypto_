import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./navigation/screens/Home";
import Favorites from "./navigation/screens/Favorites";
import Search from "./navigation/screens/Search";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <TailwindProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#50d3a7",
              inactiveTintColor: "gray",
              labelStyle: {
                fontSize: 12,
              },
            }}
            screenOptions={{
              tabBarStyle: {
                height: 110,
                backgroundColor: "#171f29",
                borderColor: "#171f29",
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Favorites"
              component={Favorites}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SafeAreaProvider>
  );
}
