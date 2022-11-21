import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Styles, { COLORS } from "../constants/styles/Styles";
import { props } from "../constants/utils/items";
import * as ScreenOrientation from "expo-screen-orientation";
import ListItem2Cols from "../components/ListItem2Cols";

const SearchFD = ({ navigation, route }) => {
  ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_DOWN);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width, height } = Dimensions.get("screen");

  let arr = [];
  useEffect(() => {
    props.data.map((prop) => {
      prop.props.map((d) => {
        if (d.toLowerCase() == route.params?.name) {
          arr.push(prop.title);
        }
      });
    });
    setDatas(arr.sort());
    setLoading(false);
  }, []);

  function calHeight(length) {
    console.log(length);
    if (length < 6) {
      return 11;
    } else if (length < 12) {
      return 18;
    } else if (length < 18) {
      return 27;
    } else if (length < 24) {
      return 37;
    } else if (length < 30) {
      return 44;
    } else if (length < 36) {
      return 50;
    } else if (length < 42) {
      return 57;
    } else if (length < 50) {
      return 64;
    } else if (length < 56) {
      return 70;
    } else {
      return 105;
    }
  }

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
              marginTop: "21%",
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
          marginTop: "-9%",
        }}
      >
        {route.params?.name}
      </Text>
      {loading ? (
        <View>
          <Text>loading.....</Text>
        </View>
      ) : (
        <View>
          <FlatList
            columnWrapperStyle={{
              justifyContent: "space-around",
            }}
            numColumns={2}
            data={datas}
            contentContainerStyle={{
              height: (height * calHeight(datas.length)) / 11,
            }}
            renderItem={({ item }) => {
              return <ListItem2Cols item={item} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchFD;
