import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
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
          marginRight: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: height/7
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginLeft: "8%",
              marginTop: "5%",
              fontSize: 22,
              fontFamily: "ShabnamBold",

            }}
          >
            Search excipients App
          </Text>
          <Image
            source={require("../assets/png/logo.png")}
            style={{
              width: '24%',
              height: height/8.3,
              marginRight: '5%'
            }}
            resizeMode='cover'
          />
        </View>
      </ImageBackground>
  );
};

export default Header;
