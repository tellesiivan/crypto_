import { View, Text, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

export default function DataGraph() {
  return (
    <View>
      <LineChart
        data={{
          labels: ["M", "T", "W", "T", "F", "SAT", "SUN"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={410} // from react-native
        height={240}
        yAxisLabel=""
        yAxisSuffix="EOS"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#050713",
          backgroundGradientFrom: "#11152e",
          backgroundGradientTo: "#1b2a38",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {},
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#f91880",
          },
        }}
        bezier
        style={{
          padding: 4,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
