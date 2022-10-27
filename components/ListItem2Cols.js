import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const ListItem2Cols = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("searchDF", {
          title: item.title,
        })
      }
    >
      <ImageBackground
        source={require("../assets/png/Group29.png")}
        style={{
          width: width / 1.7,
          height: width / 2.1,
          elevation: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/png/drug.png")}
          style={{
            width: "24%",
            height: 100,
            marginLeft: 8,
            marginTop: 4,
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
            bottom: "32%",
            maxWidth: 150,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ListItem2Cols;

const styles = StyleSheet.create({});
