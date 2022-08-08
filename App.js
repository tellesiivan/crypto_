import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <TailwindProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </TailwindProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
