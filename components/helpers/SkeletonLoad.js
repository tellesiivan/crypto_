import { View, Text } from "react-native";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

export default function SkeletonLoad() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#0f1821"
      foregroundColor="#252531"
    >
      <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <Rect x="0" y="60" rx="2" ry="2" width="100%" height="120" />
      <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <Rect x="0" y="60" rx="2" ry="2" width="100%" height="120" />
      <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <Rect x="0" y="60" rx="2" ry="2" width="100%" height="120" />
    </ContentLoader>
  );
}
