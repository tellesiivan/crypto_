import { Image, Text, View } from "react-native";
import tailwind from "twrnc";

export default function ImageTemp({ src, height, width }) {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={{ uri: src }}
        style={tailwind`rounded-xl h-${height} w-${width}`}
      />
    </View>
  );
}
