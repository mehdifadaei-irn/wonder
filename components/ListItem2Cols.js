import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

const { width, height } = Dimensions.get("screen");

const ListItem2Cols = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("searchDF", {
          title: item,
        })
      }
      onLongPress={async () => {
        await Clipboard.setStringAsync(item);
        ToastAndroid.showWithGravityAndOffset(
          "Copyied",
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          0,
          100
        );
      }}
    >
      <ImageBackground
        source={require("../assets/png/Group29.png")}
        style={{
          width: width / 2,
          height: width / 2.2,
          elevation: 2,
          alignItems: "center",
          opacity: 0.7,
        }}
        resizeMode={"cover"}
      >
        <Image
          source={require("../assets/png/drug.png")}
          style={{
            width: "24%",
            height: 100,
            marginLeft: 8,
            marginTop: 4,
            opacity: 0.95,
          }}
          resizeMode={"contain"}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            position: "absolute",
            // left: "40%",
            bottom: "20%",
            maxWidth: 150,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              width: width / 3.2,
              paddingBottom: -10,
              height: height / 14,
              marginBottom: -10,
              textAlign: "center",
            }}
          >
            {item}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ListItem2Cols;

const styles = StyleSheet.create({});
