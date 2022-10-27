import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("screen");
const Loading = ({ loading }) => {
  if (!loading === true) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"black"} />
      {/* <LottieView
        source={require("../assets/lottie/97952-loading-animation-blue.json")}
        style={[{ top: -35, width: "100%", aspectRatio: 1 }]}
        autoPlay
        loop
      /> */}
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#eeebebb6",
    // opacity: 0.9,
  },
});
