import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";

export default function ConvertStringToHTML(str) {
  const source = {
    html: str,
  };

  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      baseStyle={{ color: "#e5e7eb" }}
      contentWidth={width}
      source={source}
    />
  );
}
