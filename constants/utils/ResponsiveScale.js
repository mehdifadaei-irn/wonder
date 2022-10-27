import { Platform, StatusBar, Dimensions } from "react-native";

export default function RFPercentage(percent) {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    Platform.OS === "android" ? standardLength - offset : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
