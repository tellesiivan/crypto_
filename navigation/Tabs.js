import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favorites from "./screens/Favorites";
import Home from "./screens/Home";
import Preferences from "./screens/Preferences";
import Search from "./screens/Search";

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBarOptions={{
      //   activeTintColor: "#ff75c6",
      //   inactiveTintColor: "gray",
      //   showLabel: false,
      //   labelStyle: {
      //     fontSize: 12,
      //   },
      // }}
      screenOptions={{
        tabBarStyle: {
          height: 100,
          backgroundColor: "#171f29",
          borderColor: "#171f29",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#f91880",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },

          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="bookmark" color={color} size={size} />;
          },
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Preferences"
        component={Preferences}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings" color={color} size={size} />;
          },
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
}
