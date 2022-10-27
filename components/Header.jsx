import { Text, View, Image, ImageBackground, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

const Header = () => {
  return (
    <ImageBackground
      source={require("../assets/png/header.png")}
      resizeMode="cover"
      style={{
        width: width,
        height: height / 5,
        paddingTop: "4%",
        paddingRight: "4%",
        marginRight: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginLeft: "8%",
            marginTop: "4%",
            fontSize: 25,
            fontFamily: "ShabnamBold",
          }}
        >
          اپلیکیشن جستجوی دارو
        </Text>
        <Image
          source={require("../assets/png/logo.png")}
          style={{
            width: 100,
            height: 100,
            alignItems: "center",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Header;
