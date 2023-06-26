import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { client } from "../lib/sanityClient";
import { keys, props } from "../constants/utils/items";
import * as ScreenOrientation from "expo-screen-orientation";
import ListItemPropsSearch2 from "../components/ListItemPropsSearch2";

const SearchDF = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("screen");
  ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_DOWN);

  const [features, setFeatures] = useState([]);
  //route.params?.title
  useEffect(() => {
    props.data.map((d, index) => {
      if (d.title == route.params?.title) {
        setFeatures(d.props.sort());
      }
    });
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../assets/png/header.png")}
        resizeMode="cover"
        style={{
          width: width,
          height: height / 5,
          paddingTop: "4%",
          paddingRight: "4%",
          marginRight: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/png/back.png")}
            resizeMode={"contain"}
            style={{
              width: width / 6,
              height: "30%",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginBottom: "7%",
          }}
          onPress={() => navigation.navigate("home")}
        >
          <Text
            style={{
              color: "#fff",
              marginLeft: "8%",
              marginTop: "4%",
              fontSize: 20,
              fontFamily: "VazirBold",
              marginRight: -10,
            }}
          >
            Search excipients App
          </Text>
          <Image
            source={require("../assets/png/logo.png")}
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
      </ImageBackground>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: "5%",
          marginTop: "-5%",
        }}
      >
        {route.params?.title}
      </Text>

      <ScrollView
        contentContainerStyle={{
          height: (height * (features.length > 7 ? 14 : 11)) / 12,
        }}
      >
        {features?.map((src, index) => {
          return <ListItemPropsSearch2 src={src} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default SearchDF;
